import { FormEvent, memo, useCallback, useEffect, useState } from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import { AiOutlineReload } from 'react-icons/ai';
import { FaSearch } from 'react-icons/fa';
import { MdCleaningServices } from 'react-icons/md';

import { useCharacters } from 'context/CharactersContext';

import Banner from 'components/Banner';
import CharacterCard from 'components/CharacterCard';
import Loader from 'components/Loader';
import Paginate from 'components/Paginate';

import useTitle from 'hooks/useTitle';

import { FormGroup, ReloadButton } from './styles';

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
  const handleButtonReload = useCallback(() => {
    fetchCharacters(0);
    setValue('');
  }, [fetchCharacters]);

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
              <Button variant="primary" disabled={!value?.length} type="submit">
                <FaSearch />
              </Button>
              {value?.length && (
                <Button
                  variant="primary"
                  onClick={() => setValue('')}
                  type="submit"
                >
                  <MdCleaningServices />
                </Button>
              )}
            </FormGroup>

            <>
              <div className="d-flex flex-wrap justify-content-center align-items-center mb-3 pt-5">
                {characters.length === 0 ? (
                  <div className="text-white d-flex flex-column align-items-center">
                    <h2>Character Not Found</h2>
                    <ReloadButton type="button" onClick={handleButtonReload}>
                      <AiOutlineReload />
                    </ReloadButton>
                  </div>
                ) : (
                  characters.map((character) => (
                    <CharacterCard
                      className="m-3"
                      key={character.id}
                      character={character}
                    />
                  ))
                )}
              </div>
              {totalPages > 1 && (
                <Paginate
                  onPageChange={({ selected }) =>
                    fetchCharacters(selected, value)
                  }
                  pageCount={totalPages}
                  forcePage={currentPage}
                />
              )}
            </>
          </Container>
        </main>
      )}
    </>
  );
};

export default memo(Home);
