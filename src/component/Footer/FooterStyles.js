import styled from 'styled-components';

export const ContainerFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 7rem 0 2rem 0;
  p {
    font-weight: 800;

    @media (max-width: 560px) {
      font-size: 20px;
    }

    @media (max-width: 400px) {
      font-size: 20px;
    }
  }
`;

export const ContainerLinks = styled.div`
  margin-bottom: 1rem;
`;
