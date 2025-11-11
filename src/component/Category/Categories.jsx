import { useSelector } from 'react-redux';
import { CategoryContainer } from './CategoryStyles';
import Category from './Category';

export const Categories = () => {
  const { categorias } = useSelector((state) => state.categorias);
  return (
    <CategoryContainer>
      {categorias.map((category) => (
        <Category key={category.id} {...category} />
      ))}
    </CategoryContainer>
  );
};

export default Categories;
