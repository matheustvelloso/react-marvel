import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkBackToHome = styled(Link)`
  width: 178px;
  text-decoration: none;
  color: #fff;
  display: flex;
  align-items: center;

  &:hover {
    color: #e62429;
  }
`;
