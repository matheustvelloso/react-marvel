import { FormEvent, memo, useCallback, useEffect, useState } from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import { FaSearch } from 'react-icons/fa';

import { useComics } from 'context/ComicsContext';

import Banner from 'components/Banner';
import ComicCard from 'components/ComicCard';
import Loader from 'components/Loader';
import Paginate from 'components/Paginate';

import useTitle from 'hooks/useTitle';

import { FormGroup } from './styles';

const Comics: React.FC = () => {
  const [value, setValue] = useState<string>();
  const setTitle = useTitle();
  const { comics, isLoading, totalPages, currentPage, error, fetchComics } =
    useComics();

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fetchComics(0, value);
    },
    [fetchComics, value],
  );

  useEffect(() => {
    fetchComics(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTitle('Comics');
  }, [setTitle]);

  return (
    <>
      <Banner title="MARVEL COMICS" />
      {isLoading && <Loader />}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && (
        <main className="bg-dark py-1">
          <Container className="pb-5">
            <FormGroup onSubmit={handleSubmit}>
              <Form.Control
                type="text"
                placeholder="Search Comics"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button variant="primary" type="submit">
                <FaSearch />
              </Button>
            </FormGroup>

            <>
              <div className="d-flex flex-wrap justify-content-center align-items-center mb-3 pt-5">
                {comics.map((comic) => (
                  <ComicCard className="m-3" key={comic.id} comic={comic} />
                ))}
              </div>
              <Paginate
                onPageChange={({ selected }) => fetchComics(selected, value)}
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

export default memo(Comics);
