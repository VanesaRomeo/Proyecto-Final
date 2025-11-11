import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 25px;
  gap: 15px;

  h2 {
    margin-top: 5%;
  }

  p {
    font-size: 25px;
    width: 800px;

    @media (max-width: 740px) {
      width: 500px;
      font-size: 20px;
    }

    @media (max-width: 560px) {
      width: 400px;
      font-size: 20px;
    }

    @media (max-width: 400px) {
      width: 250px;
      font-size: 20px;
    }
  }

  h2,
  p,
  h3 {
    background: linear-gradient(
      357deg,
      rgba(17, 15, 50, 0.7512254901960784) 46%,
      rgba(13, 93, 92, 1) 83%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`;

export const ProductSeparator = styled.div`
  display: flex;
  gap: 10px;
  padding: 15px;
  font-size: 25px;
`;
