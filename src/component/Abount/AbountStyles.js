import styled from 'styled-components';

export const AbountInfo = styled.div`
  display: flex;
  font-size: 25px;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 15px;
  padding: 15px;

  h2 {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    background: linear-gradient(
      357deg,
      rgba(17, 15, 50, 0.7512254901960784) 46%,
      rgba(13, 93, 92, 1) 83%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;

    @media (max-width: 560px) {
      width: 300px;
      font-size: 25px;
    }
    @media (max-width: 400px) {
      font-size: 25px;
    }
  }

  p {
    background: linear-gradient(
      357deg,
      rgba(17, 15, 50, 0.7512254901960784) 46%,
      rgba(13, 93, 92, 1) 83%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    width: 800px;
    font-size: 25px;
    color: rgba(17, 15, 50, 0.7512254901960784);

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
`;
