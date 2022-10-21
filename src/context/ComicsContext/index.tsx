import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import Api from 'services/Api';

import { ComicType } from 'types/ComicType';

interface IContextProps {
  comics: ComicType[];
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  error: string | null;
  fetchComics: (page: number, titleStartsWith?: string) => Promise<void>;
}
interface IComicsProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const ComicsProvider: React.FC<IComicsProviderProps> = ({
  children,
}) => {
  const [comics, setComics] = useState<ComicType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const fetchComics = useCallback(
    async (page: number, titleStartsWith?: string) => {
      try {
        setIsLoading(true);
        const {
          data: {
            data: { results, total },
          },
        } = await Api.get(`/comics`, {
          params: {
            limit: 20,
            offset: page * 20,
            titleStartsWith,
          },
        });
        setComics(results);
        setTotalPages(total / 20);
        setCurrentPage(page);
      } catch {
        setError('Comics not found');
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          comics,
          isLoading,
          totalPages,
          currentPage,
          error,
          fetchComics,
        }),
        [comics, currentPage, error, fetchComics, isLoading, totalPages],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useComics = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useComics must be within CharactersProvider');
  }

  return context;
};
