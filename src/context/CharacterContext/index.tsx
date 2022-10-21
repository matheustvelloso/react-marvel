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
  character: CharacterType | null;
  isLoading: boolean;
  error: string | null;
  fetchCharacter: (id: number | string) => Promise<void>;
}
interface ICharacterProviderProps {
  children: React.ReactNode;
}

export const ReactContext = createContext<IContextProps>({} as IContextProps);

export const CharacterProvider: React.FC<ICharacterProviderProps> = ({
  children,
}) => {
  const [character, setCharacter] = useState<CharacterType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCharacter = useCallback(async (characterId: number | string) => {
    setIsLoading(true);
    try {
      const {
        data: {
          data: {
            results: [results],
          },
        },
      } = await Api.get(`/characters/${characterId}`);
      setCharacter(results);
    } catch {
      setError('Character not found');
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <ReactContext.Provider
      value={useMemo(
        () => ({
          character,
          isLoading,
          error,
          fetchCharacter,
        }),
        [character, error, isLoading, fetchCharacter],
      )}
    >
      {children}
    </ReactContext.Provider>
  );
};

export const useCharacter = (): IContextProps => {
  const context = useContext(ReactContext);

  if (!context) {
    // eslint-disable-next-line no-console
    console.error('useCharacter must be within CharacterProvider');
  }

  return context;
};
