import { memo } from 'react';

import { getImageURL } from 'helpers';

import { ComicType } from 'types/ComicType';

import {
  BgContainer,
  ContentContainer,
  ImgContainer,
  InfoContainer,
  Title,
} from './styles';

interface IComCardProps {
  com: ComicType;
}

const ComCard: React.FC<IComCardProps> = ({ com }) => {
  return (
    <BgContainer>
      <ContentContainer>
        <ImgContainer>
          <img
            className="img-fluid"
            src={getImageURL(com.thumbnail)}
            alt={com.title}
          />
        </ImgContainer>

        <InfoContainer>
          <Title>Series:</Title>
          {com.series && <p>{com.series.name}</p>}
        </InfoContainer>
        <hr />
        <InfoContainer>
          <Title>Stories:</Title>
          {com.stories && (
            <div>
              <h3>Available:</h3>
              <p>{com.stories.available}</p>
              {com.stories.items.map((storie) => (
                <div key={com.id} className="py-3">
                  <p>{storie.name}</p>
                </div>
              ))}
            </div>
          )}
        </InfoContainer>
        <hr />
        <InfoContainer>
          <Title>Creators:</Title>
          {com.creators && (
            <>
              <h3>Available:</h3>
              <p>{com.creators.available}</p>
              {com.creators.items.map((creator) => (
                <div key={com.id} className="py-3">
                  <p>{creator.name}:</p>
                  <p>{creator.role}</p>
                </div>
              ))}
            </>
          )}
        </InfoContainer>
        <hr />
      </ContentContainer>
      <div>
        {com.description && <Title>Description:</Title>}
        <p>{com.description}</p>
      </div>
    </BgContainer>
  );
};

export default memo(ComCard);
