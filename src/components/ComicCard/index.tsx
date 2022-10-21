import { memo } from 'react';

import { getImageURL } from 'helpers';

import { ComicType } from 'types/ComicType';

import { Container, ImgContainer, LinkCharacter } from './styles';

interface IComicCardProps {
  comic: ComicType;
  className?: string;
}

const ComicCard: React.FC<IComicCardProps> = ({ comic, className }) => {
  return (
    <Container className={className}>
      <LinkCharacter to={`/comics/${comic.id}`}>
        <ImgContainer>
          <img
            className="img-fluid"
            src={getImageURL(comic.thumbnail)}
            alt={comic.title}
          />
        </ImgContainer>
        <div>
          <p className="p-3">{comic.title}</p>
        </div>
      </LinkCharacter>
    </Container>
  );
};

export default memo(ComicCard);
