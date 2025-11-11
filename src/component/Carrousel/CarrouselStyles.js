import styled from 'styled-components';

// Estilos para el contenedor del carrusel
export const SliderContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px 0;

  /* Ajusta la altura del contenedor para que se adapten las imágenes */
  img {
    width: 65%; /* Ajusta el tamaño según lo que necesites */
    height: 370px; /* Asegúrate de que todas tengan la misma altura */
    border-radius: 10px;
    object-fit: cover;
    margin: 0; /* Reduce el espacio entre imágenes */

    @media (max-width: 1140px) {
      width: 68%;
      height: 300px;
    }

    @media (max-width: 960px) {
      width: 70%;
      height: 250px;
    }
  }
  .slick-prev:before,
  .slick-next:before {
    color: black; /* Cambia el color de las flechas de navegación */
  }

  .slick-dots li button:before {
    font-size: 12px;
    color: #007bff; /* Cambia el color de los puntos de navegación */
  }

  .slick-dots li.slick-active button:before {
    color: #ff6347; /* Cambia el color del punto activo */
  }

  @media (max-width: 740px) {
    display: none;
  }
`;
