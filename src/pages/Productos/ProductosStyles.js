import styled from 'styled-components';

export const ProductoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  p {
    background: linear-gradient(
      357deg,
      rgba(17, 15, 50, 0.7512254901960784) 46%,
      rgba(13, 93, 92, 1) 83%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  p {
    width: 800px;
    font-size: 20px;
  }

  @media (max-width: 840px) {
    h1 {
      font-size: 30px;
      width: 300px;
    }
    p {
      width: 500px;
      font-size: 18px;
    }
  }

  @media (max-width: 540px) {
    h1 {
      font-size: 20px;
      width: 280px;
    }
    p {
      width: 90%;
      font-size: 16px;
    }
  }

  @media (max-width: 360px) {
    h1 {
      font-size: 20px;
      width: 220px;
    }
    p {
      width: 100%;
      font-size: 14px;
    }
  }
`;

export const ProducCategory = styled.div`
  display: flex;
`;

export const CategoriasSections = styled.section`
  margin-top: 4rem;

  h2 {
    color: rgba(13, 93, 92, 1);

    @media (max-width: 560px) {
      font-size: 18px;
    }
  }
`;
export const Container = styled.div`
  width: 90%; /* Opción de ancho flexible */
  margin: 0 auto; /* Centra el contenedor */
  padding: 20px; /* Espacio interno */
  text-align: center;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;


export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px; /* Espacio entre los elementos */
  padding: 20px;
  justify-items: center;

  @media (max-width: 1300px) {
    gap: 25px; /* Reducir un poco el espacio en pantallas medianas */
    padding: 15px;
  }

  @media (max-width: 768px) {
    
    gap: 20px; /* Menor espacio en pantallas más pequeñas */
    padding: 10px;
  }

  @media (max-width: 480px) {
   
    gap: 15px; /* Espacio compacto en pantallas muy pequeñas */
    padding: 5px;
  }

  /* Nuevo estilo para pantallas grandes */
  @media (min-width: 1920px) {
    gap: 50px; /* Aumentar espacio entre los productos */
    padding: 40px; /* Más espacio alrededor de la cuadrícula */
  }
`;


export const ProductCard = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  background-color: blanchedalmond;
  padding: 20px;
  border-radius: 8px;
  border: 3px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 300px; /* Aumenta el tamaño máximo en pantallas grandes */
  margin: 0 auto;
  margin-bottom: 20px;

  h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
    color: rgba(13, 93, 92, 1);
  }

  p {
    color: rgba(13, 93, 92, 1);
    margin: 0.5rem 0;
  }

  img {
    width: 90%;
    height: 350px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 8px;
  }


  @media (min-width: 1920px) {
    max-width: 350px;
    padding: 25px;
  }
  
  @media (max-width: 1300px) {
    margin-bottom: 20px; 
    padding: 25px;
    img {
      width: 170px;
      height: 230px;
    }
  }

  @media (max-width: 768px) {
   width: 250px;
   text-align: center;
    margin-bottom: 15px;
    padding: 20px;
    img {
      width: 140px;
      height: 190px;
    }
  }

  @media (max-width: 560px) {
    
    margin-bottom: 10px;
    padding: 15px;
    img {
      width: 100px;
      height: 170px;
    }
  }
`;
