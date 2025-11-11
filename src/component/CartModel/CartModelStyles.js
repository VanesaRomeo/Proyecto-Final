import styled, { css } from 'styled-components';
import { motion } from 'framer-motion';

export const CartModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 200;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  width: 450px;
  height: 100vh;
  border: 2px solid black;
  padding: 1rem;
  box-shadow:
    0 4px 6px rgba(0, 0, 0, 0.1),
    0 1px 3px rgba(0, 0, 0, 0.08);

  overflow-y: auto;
  padding-right: 10px;
  white-space: nowrap;
  scrollbar-width: thin;
  scrollbar-color: rgba(13, 93, 92, 1) #f8f9fa;
  h2 {
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-size: 18px;
    font-weight: bold;
    margin: 20px 0;
    text-align: center;
  }

  @media (max-width: 1120px) {
    width: 400px; /* Reduce el ancho del modal */
    padding: 1.5rem;
  }

  @media (max-width: 760px) {
    width: 350px; /* Reduce aún más para tablets */
    gap: 20px;
    padding: 1rem;
  }

  @media (max-width: 560px) {
    width: 50vw; 
    height:100vh;
    padding: 1rem;
    border: none;
    border-radius: 0;

    
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: #333;
  cursor: pointer;

  &:hover {
    color: #000;
  }
`;


export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

// cart card
export const ProductCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra verticalmente */
  align-items: center; /* Centra horizontalmente */
  width: 90%; /* Asegura que tenga el ancho necesario */
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: blanchedalmond;
  gap: 15px;

 
  img {
    width: 30%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
  }

  

  @media (max-width: 1120px) {
    padding: 14px;
    img {
      width: 60%; /* Aumentar un poco el tamaño de imagen */
    }
  }

  @media (max-width: 760px) {
    padding: 12px;
    img {
      width: 70%; /* Imagen más grande en pantallas pequeñas */
    }

    p{
      text-align: center;
    }
    
  }

  @media (max-width: 560px) {
    flex-direction: column; /* Cambiar a diseño horizontal */
    padding: 4px;

    img {
      width: 50%; /* Imagen más pequeña en pantallas muy pequeñas */
    }
  }

`;

export const ProductInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centra verticalmente */
  align-items: center; /* Centra horizontalmente */
  text-align: center; /* Asegura que el texto esté centrado */
  width: 100%; /* Garantiza que ocupe todo el ancho del contenedor */
  padding: 10px 0; /* Añade algo de espacio si es necesario */


  @media (max-width: 760px) {
    padding: 8px 0; /* Ajusta el espacio en pantallas medianas */
  }

  @media (max-width: 560px) {
    padding: 5px 0; /* Reduce el espacio en pantallas pequeñas */
  }
`;


export const ProductName = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin: 0; /* Elimina márgenes predeterminados */
  padding: 0; /* Elimina paddings predeterminados */
  text-align: center; /* Centra el texto */
  line-height: 1.4; /* Ajusta la altura de línea para mejor legibilidad */
  word-wrap: break-word; /* Rompe palabras largas para evitar desbordamientos */

  @media (max-width: 760px) {
    font-size: 1rem; /* Reduce el tamaño del texto en pantallas medianas */
  }

  @media (max-width: 560px) {
    font-size: 0.9rem; /* Reduce aún más el tamaño del texto en pantallas pequeñas */
  }

`;


export const QuantityControlsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin-top: 15px;

  @media (max-width: 760px) {
    justify-content: space-around;
  }

  @media (max-width: 560px) {
    justify-content: space-between;
    margin-top: 8px;
    flex-wrap: wrap;
  }
`;

export const AdjustButton = styled.button`
  background-color: burlywood;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  padding: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #2c3e50;
  }
`;
export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 150; /* Menor que el modal */
  width: 100vw;
  height: 100vh;
  ${({ isHidden }) =>
    !isHidden &&
    css`
      backdrop-filter: blur(4px);
    `}

    @media (max-width: 760px) {
    backdrop-filter: blur(2px); /* Menor desenfoque en pantallas pequeñas */
  }
`;

export const QuantityDisplay = styled.span`
  font-size: 1rem;
  font-weight: bold;
  padding: 0 10px;
  color: #333;
`;

export const PrecioContainer = styled.div`
  color: black;
  & p {
    text-align: center;
    margin-bottom: 0;
  }
`;

export const TotalStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: blanchedalmond;
  gap: 10px;
  padding: 10px;
  @media (max-width: 1120px) {
    gap: 8px;
    padding: 8px;
  }

  @media (max-width: 760px) {
    flex-direction: column;
    text-align: left;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    justify-content: space-between;
  }

`;

export const ButtonStylesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
 margin-bottom: 5%;
  @media (max-width: 760px) {
    
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
  }

  @media (max-width: 560px) {
    flex-direction: column;
    gap: 8px;
   
  }
`;
export const PrecioFormat = styled.div``;
