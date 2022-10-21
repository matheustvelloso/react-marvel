import { memo } from 'react';

import { ReactPaginateProps } from 'react-paginate';

import { Pagination } from './styles';

const Paginate: React.FC<ReactPaginateProps> = (props) => {
  return (
    <Pagination
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
      nextLabel=">>"
      previousLabel="<<"
      pageRangeDisplayed={2}
      marginPagesDisplayed={0}
    />
  );
};

export default memo(Paginate);
