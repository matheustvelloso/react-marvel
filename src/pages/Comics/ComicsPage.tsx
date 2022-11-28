import { FormEvent, memo, useCallback, useEffect, useState } from 'react';

import { Button, Container, Form } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { FaSearch } from 'react-icons/fa';

import { useComics } from 'context/ComicsContext';

import Banner from 'components/Banner';
import ComicCard from 'components/ComicCard';
import Loader from 'components/Loader';
import Paginate from 'components/Paginate';

import useTitle from 'hooks/useTitle';

import { FormGroup, ReloadButton } from './styles';

const Comics: React.FC = () => {
  const [value, setValue] = useState('');
  const setTitle = useTitle();
  const { comics, isLoading, totalPages, currentPage, error, fetchComics } =
    useComics();

  const handleSearch = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      fetchComics(0, value);
    },
    [fetchComics, value],
  );
  const handleButtonReload = useCallback(() => {
    fetchComics(0);
    setValue('');
  }, [fetchComics]);

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
            <FormGroup onSubmit={handleSearch}>
              <Form.Control
                type="text"
                placeholder="Search Comics"
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
                {comics.length === 0 ? (
                  <div className="text-white d-flex flex-column align-items-center">
                    <h2>Comic Not Found</h2>
                    <ReloadButton type="button" onClick={handleButtonReload}>
                      <div className="d-flex align-items-center">
                        <BsArrowLeft />
                        <span className="ms-1">Go Back</span>
                      </div>
                    </ReloadButton>
                  </div>
                ) : (
                  comics.map((comic) => (
                    <ComicCard className="m-3" key={comic.id} comic={comic} />
                  ))
                )}
              </div>
              {totalPages > 1 && (
                <Paginate
                  onPageChange={({ selected }) => fetchComics(selected, value)}
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

export default memo(Comics);
