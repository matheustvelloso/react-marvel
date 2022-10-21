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
  comic: ComicType | null;
  isLoading: boolean;
  error: string | null;
  fetchComic: (id: number | string) => Promise<void>;
}
interface IComicProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const ComicProvider: React.FC<IComicProviderProps> = ({ children }) => {
  const [comic, setComic] = useState<ComicType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchComic = useCallback(async (id: number | string) => {
    try {
      setIsLoading(true);
      const {
        data: {
          data: {
            results: [results],
          },
        },
      } = await Api.get(`/comics/${id}`);
      setComic(results);
    } catch {
      setError('Comic not found');
    } finally {
      setIsLoading(false);
    }
  }, []);
  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          comic,
          isLoading,
          error,
          fetchComic,
        }),
        [comic, error, fetchComic, isLoading],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useComic = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useComic must be within CharactersProvider');
  }

  return context;
};
