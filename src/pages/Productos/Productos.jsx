import { useSelector } from 'react-redux';
import {
  CategoriasSections,
  Container,
  ProductGrid,
  ProductoDiv,
} from './ProductosStyles';

import Button from '@/component/UI/Button/Button';
import { useState } from 'react';

import { CardProducto } from './CardProducto';
import { INITIAL_LIMIT } from '@/utiles/constantes';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Categories } from '@/component/Category/Categories';

export const Productos = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  const [limit, setLimit] = useState(INITIAL_LIMIT);

  const { productos = [] } = useSelector((state) => state.productos || {});

  const { selectedCategory } = useSelector((state) => state.categorias);

  const productosFiltrados = selectedCategory
    ? productos.filter((producto) => producto.category === selectedCategory)
    : productos;

  // Restringir la cantidad de productos a mostrar según el límite
  const productosLimitados = productosFiltrados.slice(0, limit);

  // Resetear el límite cuando cambie la categoría seleccionada
  useEffect(() => {
    setLimit(INITIAL_LIMIT);
  }, [selectedCategory]);
  return (
    <>
      <Container>
        <ProductoDiv>
          <h1>Encuentra los libros que te apasionan</h1>
          <p>
            Navega por nuestras categorías y descubre una selección especial de
            libros cuidadosamente elegidos para ti. Ya sea que estés buscando
            una novela emocionante, un ensayo inspirador o un libro técnico,
            aquí lo tenemos.
          </p>
        </ProductoDiv>

        <CategoriasSections>
          <h2>Nuestras Categorias</h2>
          <Categories />
        </CategoriasSections>

        <ProductGrid>
          {productosLimitados.map((libro) => (
            <CardProducto key={libro.id} {...libro} />
          ))}
        </ProductGrid>
      </Container>

      <Button
        onClick={() =>
          setLimit((prevLimit) =>
            Math.max(prevLimit - INITIAL_LIMIT, INITIAL_LIMIT)
          )
        }
        disabled={limit === INITIAL_LIMIT}
      >
        <span>Ver menos</span>
      </Button>

      <Button
        onClick={() => setLimit((prevLimit) => prevLimit + INITIAL_LIMIT)}
        disabled={productosFiltrados.length <= limit}
      >
        <span>Ver mas</span>
      </Button>
    </>
  );
};

export default Productos;
