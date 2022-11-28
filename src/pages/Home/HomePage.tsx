import { FormEvent, memo, useCallback, useEffect, useState } from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

import { useCharacters } from 'context/CharactersContext';

import Banner from 'components/Banner';
import CharacterCard from 'components/CharacterCard';
import Loader from 'components/Loader';
import Paginate from 'components/Paginate';

import useTitle from 'hooks/useTitle';

import { FormGroup, ReloadButton } from './styles';

const Home: React.FC = () => {
  const setTitle = useTitle();
  const [value, setValue] = useState('');
  const {
    characters,
    isLoading,
    totalPages,
    currentPage,
    error,
    fetchCharacters,
  } = useCharacters();

  const handleSearch = useCallback(
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
            <FormGroup onSubmit={handleSearch}>
              <Form.Control
                type="text"
                placeholder="Search Character"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button variant="primary" disabled={!value?.length} type="submit">
                <FaSearch />
              </Button>
              {value?.length > 0 && (
                <Button
                  variant="primary"
                  onClick={handleButtonReload}
                  type="submit"
                >
                  X
                </Button>
              )}
            </FormGroup>

            <>
              <div className="d-flex flex-wrap justify-content-center align-items-center mb-3 pt-5">
                {characters.length === 0 ? (
                  <div className="text-white d-flex flex-column align-items-center">
                    <h2>Character Not Found</h2>
                    <ReloadButton type="button" onClick={handleButtonReload}>
                      <div className="d-flex align-items-center">
                        <BsArrowLeft />
                        <span className="ms-1">Go Back</span>
                      </div>
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
