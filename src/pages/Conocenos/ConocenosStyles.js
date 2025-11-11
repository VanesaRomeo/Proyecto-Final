import styled from 'styled-components';

export const KnouwContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  h2,
  p {
    background: linear-gradient(
      357deg,
      rgba(17, 15, 50, 0.7512254901960784) 46%,
      rgba(13, 93, 92, 1) 83%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-align: center;
  }

  p {
    width: 800px;
    font-size: 25px;

    @media (max-width: 940px) {
      width: 700px;
      font-size: 25px;
    }

    @media (max-width: 740px) {
      width: 500px;
      font-size: 25px;
    }

    @media (max-width: 560px) {
      width: 300px;
      font-size: 20px;
    }

    @media (max-width: 360px) {
      width: 300px;
      font-size: 20px;
    }
  }
`;
