import { memo, useState } from 'react';

import { Container, Nav } from 'react-bootstrap';
import { VscChromeClose, VscThreeBars } from 'react-icons/vsc';

import Logo from 'assets/logoMarvel.jpeg';

import {
  BackGroundColor,
  H3,
  LinkHeader,
  MenuMobile,
  MenuOverlay,
} from './styles';

const Header: React.FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <>
      <MenuOverlay
        isMenuOpened={isMenuOpened}
        onClick={() => setIsMenuOpened(false)}
        className="d-flex d-md-none position-fixed h-100 w-100"
      />
      <MenuMobile
        isMenuOpened={isMenuOpened}
        className="d-flex flex-column d-md-none position-fixed bg-dark"
      >
        <VscChromeClose
          onClick={() => setIsMenuOpened(false)}
          className="text-white align-self-end mb-5"
        />
        <H3>Marvel</H3>
        <hr />
        <Nav>
          <LinkHeader to="/">Characters</LinkHeader>
          <hr />
          <LinkHeader to="/comics">Comics</LinkHeader>
          <hr />
        </Nav>
      </MenuMobile>
      <header>
        <BackGroundColor>
          <Container className="d-flex d-sm-block justify-content-between align-items-center">
            <LinkHeader to="/" className="d-block d-sm-none">
              <img src={Logo} alt="Logo" />
            </LinkHeader>
            <Nav className="d-none d-sm-flex justify-content-between align-items-center">
              <LinkHeader to="/">Characters</LinkHeader>
              <LinkHeader to="/">
                <img src={Logo} alt="Logo" />
              </LinkHeader>
              <LinkHeader to="/comics">Comics</LinkHeader>
            </Nav>
            <VscThreeBars
              onClick={() => setIsMenuOpened(true)}
              className="fs-icon align-self-center mx-3 d-block d-sm-none text-white"
            />
          </Container>
        </BackGroundColor>
      </header>
    </>
  );
};

export default memo(Header);
