import { memo } from 'react';

import { getImageURL } from 'helpers';

import { CharacterType } from 'types/CharacterType';

import {
  BgContainer,
  ContentContainer,
  ImgContainer,
  InfoContainer,
  Title,
} from './styles';

interface ICharCardProps {
  char: CharacterType;
}

const CharCard: React.FC<ICharCardProps> = ({ char }) => {
  return (
    <BgContainer>
      <ContentContainer>
        <ImgContainer>
          <img
            className="img-fluid"
            src={getImageURL(char.thumbnail)}
            alt={char.name}
          />
        </ImgContainer>
        <InfoContainer>
          <Title>Series:</Title>
          {char.series && char.series.items.map((serie) => <p>{serie.name}</p>)}
        </InfoContainer>
        <InfoContainer>
          <Title>Comics:</Title>
          {char.comics && char.comics.items.map((comic) => <p>{comic.name}</p>)}
        </InfoContainer>
      </ContentContainer>
      <div>
        {char.description && <Title>Description:</Title>}
        <p>{char.description}</p>
      </div>
    </BgContainer>
  );
};

export default memo(CharCard);
