import styled from 'styled-components';


export const HeaderConteiner = styled.header`
  background-image: url('https://res.cloudinary.com/dc15c8nx7/image/upload/v1732836370/libro-biblioteca-libro-texto-abierto_1150-5922_out8tp.webp');
  background-size: cover;
  background-position: center;
  object-fit: cover;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;

  img {
    width: 15%;
  }

  @media (max-width: 1024px) {
    height: 180px;
    padding: 0.5rem 1.5rem;

    img {
      width: 20%;
    }
  }

  @media (max-width: 768px) {
    height: 150px;
    padding: 0.5rem 1rem;

    img {
      width: 30%;
    }
  }

  @media (max-width: 480px) {
    height: 120px;
    padding: 0.5rem 0.5rem;

    img {
      width: 40%;
    }
  }
`;

export const LinksAndCartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: auto;

  @media (max-width: 768px) {
    width: 100%; 
    justify-content: flex-end;
    gap: 1rem; 
  }
`;

export const CartContainer = styled.div`
  position: relative;
  cursor: pointer;
    margin-right: 1rem; 
    z-index: 15;

  @media (max-width: 768px) {
    margin-right: 1rem; /* Espaciado a la derecha del carrito */
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
  @media (max-width: 560px) {
    margin-right: 1rem; /* Espaciado a la derecha del carrito */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LinksContainer = styled.ul`
   display: flex;
    position: static;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: auto;
    width: auto;
    background: none;
    clip-path: none;
    padding-left: 0;
    gap: 1rem;
    padding: 20px;

    
  @media (max-width: 769px) {
    display: ${({ $clicked }) => ($clicked ? "flex" : "none")};
  flex-direction: column;
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: ${({ $clicked }) => ($clicked ? "0" : "-100%")};
  height: 50vh;
  width: 25vw;
  background-color: rgba(245, 245, 220, 0.2);
  border-top-right-radius: ${({ $clicked }) => ($clicked ? "50%" : "0")};
  border-bottom-right-radius: ${({ $clicked }) => ($clicked ? "50%" : "0")};
  clip-path: ${({ $clicked }) =>
    $clicked ? "circle(100% at left center)" : "circle(0% at left center)"};
  transition: all 0.5s ease-in-out;
  justify-content: center;
  align-items: flex-start;
  padding-left: 2rem;
  gap: 2rem;
  z-index: 10;
  }
  @media (max-width: 560px) {
    height: 50vh;
    width: 40vw;
    font-size: 18px;
  }

  

  a {
    background-color: rgba(255, 255, 255, 0.15);
  color: bisque;
  text-decoration: none;
  font-size: 20px;
  padding: 0.7rem;
  border-radius: 5px;
  cursor: pointer;

  @media (max-width: 769px) {
    background-color: rgba(29, 28, 64, 0.751);
  }

  &:hover {
    background-color: rgba(29, 28, 64, 0.751);
    color: white;
  }


  }
`;

export const CartBadge = styled.div`
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 0.25em 0.5em;
  font-size: 0.75em; /* Ajusta el tamaño del texto del badge */
  position: absolute; /* Relativo al CartContainer */
  top: -15px; /* Posición hacia arriba respecto al contenedor */
  right: -15px; /* Posición hacia la derecha */
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    font-size: 0.75rem; /* Ajusta para dispositivos pequeños */
    top: -13px; /* Ajusta la posición en pantallas pequeñas */
    right: -13px;
  }

  @media (max-width: 480px) {
    font-size: 0,5rem;
    top: -12px;
    right: -12px;
  }
`;


export const CartIcon = styled.div`
  font-size: 30px;
display: flex;
  color: rgba(17, 15, 50, 0.75);
 cursor: pointer;
  z-index: 20;

  /* @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 480px) {
    display: flex;
  } */
`;

export const LiBack = styled.li`
  cursor: pointer;
  background-color: rgba(255, 255, 255, 0.15);
  color: bisque;
  padding: 0.7rem;
  
  &:hover {
    background-color: rgba(29, 28, 64, 0.751);
    
  }


  @media (max-width: 789px) {
    background-color: rgba(29, 28, 64, 0.751);

    
  &:hover {
   
    color: white;
  }
  }

  @media (max-width: 569px) {
    background-color: rgba(29, 28, 64, 0.751);
  }
`;

export const ContainerModelCart = styled.div`
  position: fixed;
  margin-top: 10%;
  bottom: 10%;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 30;
 

  @media (max-width: 768px) {
    bottom: 15%;
  }

  @media (max-width: 480px) {
    bottom: 20%;
  }
`;
