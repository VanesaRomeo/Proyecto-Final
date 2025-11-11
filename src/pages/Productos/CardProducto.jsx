import { ProductCard, ProductGrid } from './ProductosStyles';
import Button from '@/component/UI/Button/Button';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { toast, Toaster } from 'sonner';
import { addItem } from '@/redux/features/cart/cartSlice';

export const CardProducto = ({
  imagen,
  titulo,
  descripcion,
  precio,
  category,
  id,
}) => {
  const dispatch = useDispatch();


  return (
    <ProductGrid>
      <Toaster theme="dark" />
      <ProductCard>
        <img src={imagen} alt={titulo} />
        <h3>{titulo}</h3>
        <p>{descripcion}</p>
        <p>${precio}</p>
        <h3>{category}</h3>
        <Button
          onClick={() =>
            dispatch(
              addItem({ imagen, titulo, descripcion, precio, category, id }),
              toast.success('Producto agregado')
            )
          }
        >
          Agregar
        </Button>
      </ProductCard>
    </ProductGrid>
  );
};

CardProducto.propTypes = {
  titulo: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired,
  imagen: PropTypes.string.isRequired,
  precio: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default CardProducto;
