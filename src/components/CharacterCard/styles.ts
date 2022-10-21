import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkCharacter = styled(Link)`
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #fff;
  }
`;

export const Container = styled.div`
  background-color: #151515;
  min-height: 350px;
  width: 200px;
  font: 700 16px/1.1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
    sans-serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.5s;
  img {
    -moz-transition: all 0.3s;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
  }
  &:hover img {
    -moz-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
  &:hover {
    background-color: #e62429;
  }
`;
export const ImgContainer = styled.div`
  border-bottom: solid 5px #e62429;
  overflow: hidden;
  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;
