import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import Api from 'services/Api';

import { CharacterType } from 'types/CharacterType';

interface IContextProps {
  characters: CharacterType[];
  isLoading: boolean;
  totalPages: number;
  currentPage: number;
  error: string | null;
  fetchCharacters: (page: number, nameStartsWith?: string) => Promise<void>;
}
interface ICharactersProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const CharactersProvider: React.FC<ICharactersProviderProps> = ({
  children,
}) => {
  const [characters, setCharacters] = useState<CharacterType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacters = useCallback(
    async (page: number, nameStartsWith?: string) => {
      try {
        setIsLoading(true);
        const {
          data: {
            data: { results, total },
          },
        } = await Api.get(`/characters`, {
          params: {
            limit: 24,
            offset: page * 24,
            nameStartsWith,
          },
        });
        setCharacters(results);
        setTotalPages(total / 24);
        setCurrentPage(page);
      } catch {
        setError('Characters not found');
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
          characters,
          isLoading,
          totalPages,
          currentPage,
          error,
          fetchCharacters,
        }),
        [
          characters,
          currentPage,
          error,
          isLoading,
          totalPages,
          fetchCharacters,
        ],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useCharacters = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useCharacters must be within CharactersProvider');
  }

  return context;
};
