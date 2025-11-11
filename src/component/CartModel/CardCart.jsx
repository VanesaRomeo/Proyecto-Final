// muestra cada producto, dentro del carro

import { FaTrash } from 'react-icons/fa';
import { GoChevronLeft, GoChevronRight } from 'react-icons/go';
import PropTypes from 'prop-types';
import {
  AdjustButton,
  PrecioContainer,
  ProductCardWrapper,
  ProductInfoWrapper,
  ProductName,
  QuantityControlsWrapper,
  QuantityDisplay,
} from './CartModelStyles';
import { useDispatch } from 'react-redux';
import { formatPrecio } from './../../utiles/formatprecio';

import { addItem, removeItem } from '@/redux/features/cart/cartSlice';

export const CardCart = ({
  titulo,
  descripcion,
  precio,
  imagen,
  quantity,
  id,
}) => {
  const dispatch = useDispatch();
  return (
    <ProductCardWrapper>
      <img src={imagen} alt={titulo} />
      <ProductInfoWrapper>
        <ProductName>{titulo}</ProductName>
        <PrecioContainer>{formatPrecio(precio)}</PrecioContainer>
      </ProductInfoWrapper>
      <QuantityControlsWrapper>
        <AdjustButton onClick={() => dispatch(removeItem(id))}>
          {quantity === 1 ? <FaTrash /> : <GoChevronLeft />}
        </AdjustButton>
        <QuantityDisplay>{quantity}</QuantityDisplay>
        <AdjustButton
          onClick={() =>
            dispatch(
              addItem({ imagen, titulo, descripcion, precio, quantity, id })
            )
          }
        >
          <GoChevronRight />
        </AdjustButton>
      </QuantityControlsWrapper>
    </ProductCardWrapper>
  );
};

CardCart.propTypes = {
  titulo: PropTypes.string.isRequired,

  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
