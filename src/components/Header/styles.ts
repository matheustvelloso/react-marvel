import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

interface IMenuProps {
  isMenuOpened: boolean;
}
const fadeIn = keyframes`
    from{
        opacity: 0;
    }
    to{
        opacity: 1;
    }
`;
const fadeOut = keyframes`
    from{
        opacity: 1;
    }
    to{
        opacity: 0;
    }
`;
const enter = keyframes`
    from{
        right: -160px;
    }
    to{
        right: 0;
    }
`;
const leave = keyframes`
    from{
        right: 0;
    }
    to{
        right: -160px;
    }
`;

export const LinkHeader = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &:hover {
    color: #f00;
  }
`;

export const BackGroundColor = styled.div`
  background-color: #202020;
`;

export const MenuMobile = styled.div<IMenuProps>`
  height: 100vh;
  right: ${(props) => (props.isMenuOpened ? 0 : -160)}px;
  padding: 30px;
  width: 160px;
  animation: ${(props) => (props.isMenuOpened ? enter : leave)} 0.2s ease-out;
  transition: all 0.2s ease-out;
`;
export const MenuOverlay = styled.div<IMenuProps>`
  opacity: ${(props) => (props.isMenuOpened ? 1 : 0)};
  visibility: ${(props) => (props.isMenuOpened ? 'visible' : 'hidden')};
  animation: ${(props) => (props.isMenuOpened ? fadeIn : fadeOut)} 0.2s ease-out;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 0.2s ease-out;
`;
export const H3 = styled.h3`
  color: #e62429;
  font-size: 20px;
`;
