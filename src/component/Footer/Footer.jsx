// import { Link } from "react-router-dom";
import { BsBalloonHeartFill } from 'react-icons/bs';
import { ContainerFooter, ContainerLinks } from './FooterStyles';
import { Link } from 'react-router-dom';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';

export const Footer = () => {
  return (
    <ContainerFooter>
      <p>
        I <BsBalloonHeartFill /> BOOKS{' '}
      </p>

      <ContainerLinks>
        <Link to="/" style={{ paddingLeft: '2rem' }}>
          <FaFacebook /> I.books
        </Link>

        <Link to="/" style={{ paddingLeft: '2rem' }}>
          <AiFillInstagram /> Ilovebooks
        </Link>
      </ContainerLinks>

      <ContainerLinks>
        <Link to="/" style={{ paddingLeft: '2rem' }}>
          Derechos de autor
        </Link>
      </ContainerLinks>
    </ContainerFooter>
  );
};
