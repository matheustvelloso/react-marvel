import { memo } from 'react';

import { CharacterProvider } from 'context/CharacterContext';

import CharacterPage from './CharacterPage';

const Character: React.FC = () => {
  return (
    <CharacterProvider>
      <CharacterPage />
    </CharacterProvider>
  );
};

export default memo(Character);
