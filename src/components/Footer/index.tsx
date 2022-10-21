import { memo } from 'react';

import { Container } from 'react-bootstrap';
import {
  AiFillFacebook,
  AiFillTwitterSquare,
  AiFillInstagram,
  AiFillYoutube,
} from 'react-icons/ai';
import { FaTumblr, FaSnapchatGhost, FaPinterest } from 'react-icons/fa';

import LogoFooter from 'assets/logoFooter.jpeg';
import MarvelInsider from 'assets/marvelInsider.png';
import MarvelUnlimited from 'assets/marvelUnlimited.png';

import Config from 'Config';

import List from './List';
import MarvelSign from './MarvelSign';
import { BackGroundColor, H4, IconContainer, ImgContainer } from './styles';

const Footer: React.FC = () => {
  return (
    <footer>
      <BackGroundColor>
        <Container className="d-flex flex-column flex-lg-row justify-content-center align-items-center p-5 justify-content-evenly">
          <ImgContainer>
            <img className="img-fluid" src={LogoFooter} alt="LogoFooter" />
          </ImgContainer>
          <hr />
          <div className="d-block d-lg-flex">
            <List
              text1="ABOUT MARVEL"
              text2="HELPS/FAQS"
              text3="CARRERS"
              text4="INTERNSHIPS"
            />
            <List
              text1="ADVERSITING"
              text2="DISNEY+"
              text3="MARVELHQ.COM"
              text4="REDEEM DIGITAL COMICS"
            />
          </div>
          <hr />
          <div>
            <MarvelSign
              image={MarvelInsider}
              title="MARVEL INSIDER"
              description="Get Rewarded for Being a Marvel Fan"
            />
            <MarvelSign
              image={MarvelUnlimited}
              title="MARVEL UNLIMITED"
              description="Access Over 30,000+ Digital Comics"
            />
          </div>
          <hr />
          <div>
            <H4>FOLLOW MARVEL</H4>
            <IconContainer>
              <a href={Config.app.facebook} target="_blank" rel="noreferrer">
                <AiFillFacebook />
              </a>
              <a href={Config.app.twitter} target="_blank" rel="noreferrer">
                <AiFillTwitterSquare />
              </a>
              <a href={Config.app.instagram} target="_blank" rel="noreferrer">
                <AiFillInstagram />
              </a>
              <a href={Config.app.tumblr} target="_blank" rel="noreferrer">
                <FaTumblr />
              </a>
              <a href={Config.app.youtube} target="_blank" rel="noreferrer">
                <AiFillYoutube />
              </a>
              <a href={Config.app.snapchat} target="_blank" rel="noreferrer">
                <FaSnapchatGhost />
              </a>
              <a href={Config.app.pinterest} target="_blank" rel="noreferrer">
                <FaPinterest />
              </a>
            </IconContainer>
          </div>
        </Container>
      </BackGroundColor>
    </footer>
  );
};

export default memo(Footer);
