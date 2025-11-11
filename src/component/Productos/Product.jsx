import { ProductContainer, ProductSeparator } from './ProductStyles';
import Button from './../UI/Button/Button';
import { useNavigate } from 'react-router-dom';
import { FcLikePlaceholder, FcLike } from 'react-icons/fc';

export const Product = () => {
  const navigate = useNavigate();
  return (
    <ProductContainer id="products">
      <h2>Nuestros Productos</h2>
      <ProductSeparator>
        {' '}
        <FcLikePlaceholder />
        <FcLike />
        <FcLikePlaceholder />
        <FcLike />
        <FcLikePlaceholder />
      </ProductSeparator>
      <p>
        ¡Bienvenido a nuestra tienda! Aquí encontrarás una amplia variedad de
        libros que te llevarán a mundos fascinantes, te ofrecerán nuevos
        conocimientos y te acompañarán en tus momentos de descanso. Desde los
        clásicos más amados hasta las novedades más esperadas, tenemos algo para
        cada tipo de lector.
      </p>

      <h3>¿Listo para comenzar tu viaje literario?</h3>
      <Button onClick={() => navigate('/Productos')}>ver libros</Button>
    </ProductContainer>
  );
};
