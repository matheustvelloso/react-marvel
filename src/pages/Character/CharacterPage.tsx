import { memo, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useCharacter } from 'context/CharacterContext';

import Banner from 'components/Banner';
import CharCard from 'components/CharCard';
import Loader from 'components/Loader';

import useTitle from 'hooks/useTitle';

const CharacterPage: React.FC = () => {
  const setTitle = useTitle();
  const { character, isLoading, error, fetchCharacter } = useCharacter();

  const { id } = useParams();

  useEffect(() => {
    if (id) fetchCharacter(Number(id));
  }, [fetchCharacter, id]);

  useEffect(() => {
    setTitle(character?.name);
  }, [setTitle, character]);

  return (
    <>
      <Banner title={character?.name} />
      {isLoading && <Loader />}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && character && !error && (
        <main className="bg-dark py-1">
          <Container className="pb-5">
            <CharCard char={character} />
          </Container>
        </main>
      )}
    </>
  );
};

export default memo(CharacterPage);
