import { memo } from 'react';

import { CharactersProvider } from 'context/CharactersContext';

import HomePage from './HomePage';

const Home: React.FC = () => {
  return (
    <CharactersProvider>
      <HomePage />
    </CharactersProvider>
  );
};

export default memo(Home);
