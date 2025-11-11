import styled from 'styled-components';

export const MenuContainer = styled.div`
  font-size: 2rem;

  @media (max-width: 768px) {
    display: flex;
    padding-right: 25px;
    cursor: pointer;
  }

  @media (min-width: 769px) {
    display: none; /* Oculta el menú hamburguesa en pantallas grandes */
  }
`;
