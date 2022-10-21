import { memo } from 'react';

import { Container } from './styles';

interface IBannerProps {
  title?: string;
}

const Banner: React.FC<IBannerProps> = ({ title }) => {
  return <Container>{title && <h2>{title}</h2>}</Container>;
};

export default memo(Banner);
