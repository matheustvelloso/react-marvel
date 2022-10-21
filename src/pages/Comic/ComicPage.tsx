import { memo, useEffect } from 'react';

import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

import { useComic } from 'context/ComicContext';

import Banner from 'components/Banner';
import ComCard from 'components/ComCard';
import Loader from 'components/Loader';

import useTitle from 'hooks/useTitle';

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
            <ComCard com={comic} />
          </Container>
        </main>
      )}
    </>
  );
};

export default memo(Comic);
