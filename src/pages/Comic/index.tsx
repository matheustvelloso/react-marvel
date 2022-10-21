import { memo } from 'react';

import { ComicProvider } from 'context/ComicContext';

import ComicPage from './ComicPage';

const Comic: React.FC = () => {
  return (
    <ComicProvider>
      <ComicPage />
    </ComicProvider>
  );
};

export default memo(Comic);
