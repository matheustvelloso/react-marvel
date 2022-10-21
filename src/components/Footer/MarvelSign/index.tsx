import { memo } from 'react';

import { H4, Img, P } from './styles';

interface IMarvelSignProps {
  image: string;
  title: string;
  description: string;
}

const MarvelSign: React.FC<IMarvelSignProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="d-flex">
      <Img className="img-fluid" src={image} alt={title} />
      <div>
        <H4>{title}</H4>
        <P>{description}</P>
      </div>
    </div>
  );
};

export default memo(MarvelSign);
