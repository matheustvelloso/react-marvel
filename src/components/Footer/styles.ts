import styled from 'styled-components';

export const BackGroundColor = styled.div`
  background-color: #151515;
`;

export const IconContainer = styled.div`
  font-size: 30px;
  display: flex;
  flex-wrap: wrap;

  a {
    color: #767676;
    transition: all 0.2s ease-in;

    &:hover {
      color: #fff;
    }
  }
`;

export const ImgContainer = styled.div`
  max-width: 80px;
  max-height: 115px;
`;

export const H4 = styled.h4`
  font-family: RobotoCondensed Bold, Trebuchet MS, Helvetica, Arial, sans-serif;
  letter-spacing: 2px;
  font-size: 14px;
  color: #fff;
  font-weight: 700;
`;
