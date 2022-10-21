import { memo } from 'react';

import { ComicsProvider } from 'context/ComicsContext';

import ComicsPage from './ComicsPage';

const Comics: React.FC = () => {
  return (
    <ComicsProvider>
      <ComicsPage />
    </ComicsProvider>
  );
};

export default memo(Comics);
