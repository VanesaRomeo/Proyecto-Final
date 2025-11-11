import styled from 'styled-components';

export const HeroSeparatorStyled = styled.div`
  /* background-color:beige; */
  height: 5%;

  h1 {
    font-size: 30px;
    color: #333333;

    @media (max-width: 768px) {
      font-size: 24px;
    }

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }
`;

export const HeroContainer = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative;
  text-align: center;
  color: white;
  z-index: 1;

  img {
    width: 100vw;
    height: auto;
    object-fit: cover;
    @media (max-width: 1090px) {
      height: 60vh; /* Ajuste de altura en pantallas medianas */
    }

    @media (max-width: 768px) {
      height: 50vh; /* Ajuste de altura en pantallas medianas */
    }

    @media (max-width: 480px) {
      height: 55vh; /* Ajuste de altura en pantallas pequeñas */
    }
  }
`;

export const HeroStyled = styled.div`
  margin-top: 5%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;

  h2,
  p,
  span {
    background: linear-gradient(
      357deg,
      rgba(17, 15, 50, 0.7512254901960784) 46%,
      rgba(13, 93, 92, 1) 83%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  h1 {
    font-size: 4rem;
    margin: 10px 0;
  }
  h2 {
    font-size: 2.5rem;
    margin: 10px 0;
  }
  p,
  span {
    font-size: 1.2rem;
    padding: 10px;
  }

  @media (max-width: 1000px) {
    h2 {
      font-size: 30px;
    }
    p,
    span {
      font-size: 25px;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 25px;
    }
    p,
    span {
      width: 400px;
      font-size: 20px;
      /* padding: 8px; */
    }
  }

  @media (max-width: 560px) {
    h2 {
      font-size: 20px;
    }
    p,
    span {
      font-size: 20px;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 20px;
      width: 300px;
    }
    p,
    span {
      font-size: 20px;

      width: 350px;
    }
  }
`;
