import ReactPaginate from 'react-paginate';
import styled from 'styled-components';

export const Pagination = styled(ReactPaginate)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  li {
    list-style: none;
    box-shadow: 0 4px 16px rgba(230, 36, 41, 0.2);
    margin: 0 5px;
    transition: all 0.3s ease-in;
    color: rgb(230, 36, 41);
    &:hover {
      text-decoration: underline;
      color: #fff;
      background-color: #151515;
    }
  }
  a {
    text-decoration: none;
    color: rgb(230, 36, 41);
    padding: 0 10px;
  }
  .selected {
    background-color: #151515;
    color: #fff;
  }
  .disabled {
    display: none;
  }
  .next,
  .previous {
    font-weight: 700;
    &:hover {
      a {
        transition: all 0.3s ease-in;
        color: #fff;
      }
    }
  }
`;
