import { memo, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import { BsArrowLeft } from 'react-icons/bs';
import { useParams } from 'react-router-dom';

import { useComic } from 'context/ComicContext';

import Banner from 'components/Banner';
import ComCard from 'components/ComCard';
import Loader from 'components/Loader';

import useTitle from 'hooks/useTitle';

import { LinkBackToHome } from './styles';

const Comic: React.FC = () => {
  const setTitle = useTitle();
  const { comic, isLoading, error, fetchComic } = useComic();

  const { id } = useParams();

  useEffect(() => {
    if (id) fetchComic(Number(id));
  }, [fetchComic, id]);
  useEffect(() => {
    setTitle(comic?.title);
  }, [setTitle, comic]);

  return (
    <>
      <Banner title={comic?.title} />
      {isLoading && <Loader />}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && comic && !error && (
        <main className="bg-dark py-1">
          <Container className="pb-5">
            <LinkBackToHome to="/" className="mt-3">
              <h2>
                <BsArrowLeft />
                <span className="ms-2">Comics</span>
              </h2>
            </LinkBackToHome>
            <ComCard com={comic} />
          </Container>
        </main>
      )}
    </>
  );
};

export default memo(Comic);
