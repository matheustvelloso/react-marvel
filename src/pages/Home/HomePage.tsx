import { FormEvent, memo, useCallback, useEffect, useState } from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import { useCharacters } from 'context/CharactersContext';

import Banner from 'components/Banner';
import CharacterCard from 'components/CharacterCard';
import Loader from 'components/Loader';
import Paginate from 'components/Paginate';

import useTitle from 'hooks/useTitle';

import { FormGroup } from './styles';

const Home: React.FC = () => {
  const setTitle = useTitle();
  const [value, setValue] = useState<string>();
  const {
    characters,
    isLoading,
    totalPages,
    currentPage,
    error,
    fetchCharacters,
  } = useCharacters();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fetchCharacters(0, value);
    },
    [fetchCharacters, value],
  );

  useEffect(() => {
    fetchCharacters(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTitle();
  }, [setTitle]);

  return (
    <>
      <Banner title="MARVEL CHARACTERS" />
      {isLoading && <Loader />}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && (
        <main className="bg-dark py-1">
          <Container className="pb-5">
            <FormGroup onSubmit={handleSubmit}>
              <Form.Control
                type="text"
                placeholder="Search Character"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button variant="primary" type="submit">
                <FaSearch />
              </Button>
            </FormGroup>

            <>
              <div className="d-flex flex-wrap justify-content-center align-items-center mb-3 pt-5">
                {characters.map((character) => (
                  <CharacterCard
                    className="m-3"
                    key={character.id}
                    character={character}
                  />
                ))}
              </div>
              <Paginate
                onPageChange={({ selected }) =>
                  fetchCharacters(selected, value)
                }
                pageCount={totalPages}
                forcePage={currentPage}
              />
            </>
          </Container>
        </main>
      )}
    </>
  );
};

export default memo(Home);
