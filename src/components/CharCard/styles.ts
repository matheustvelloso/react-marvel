import styled from 'styled-components';

export const ImgContainer = styled.div`
  max-width: 400px;
  max-height: 400px;
  box-shadow: 0 4px 16px rgba(232, 182, 62, 0.5);
  padding: 10px;
  img {
    border-radius: 0 20px;
  }
`;

export const BgContainer = styled.div`
  background-color: #151515;
  margin: 36px 0;
  box-shadow: 0 4px 16px rgba(230, 36, 41, 0.5);
  border-radius: 20px 0;
  padding: 30px;
  font: 700 16px/1.1 RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial,
    sans-serif;
  color: #fff;
`;
export const ContentContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 30px;
`;

export const InfoContainer = styled.div`
  margin-top: 28px;
  p {
    padding-top: 4px;
  }
`;

export const Title = styled.h2`
  color: #e62429;
  margin-bottom: 20px;
`;
