import styled from 'styled-components';

import banner from 'assets/bannerMarvel.jpg';

export const Container = styled.div`
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-position: center center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  min-height: 400px;
`;
