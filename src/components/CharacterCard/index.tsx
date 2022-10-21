import { memo } from 'react';

import { getImageURL } from 'helpers';

import { CharacterType } from 'types/CharacterType';

import { Container, ImgContainer, LinkCharacter } from './styles';

interface ICharacterCardProps {
  character: CharacterType;
  className?: string;
}

const CharacterCard: React.FC<ICharacterCardProps> = ({
  character,
  className,
}) => {
  return (
    <Container className={className}>
      <LinkCharacter to={`/character/${character.id}`}>
        <ImgContainer>
          <img
            className="img-fluid"
            src={getImageURL(character.thumbnail)}
            alt={character.name}
          />
        </ImgContainer>
        <div>
          <p className="p-3">{character.name}</p>
        </div>
      </LinkCharacter>
    </Container>
  );
};

export default memo(CharacterCard);
