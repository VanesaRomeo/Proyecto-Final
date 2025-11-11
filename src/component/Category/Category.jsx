import { useDispatch, useSelector } from 'react-redux';
import { CategoryDiv } from './CategoryStyles';

import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { selectCategory } from '@/redux/features/categorySlice';

export const Category = ({ title, category }) => {
  const { selectedCategory } = useSelector((state) => state.categorias);

  const dispatch = useDispatch();
  return (
    <CategoryDiv
      selected={category === selectedCategory}
      onClick={() => dispatch(selectCategory(category))}
      whileTap={{ scale: 0.95 }}
    >
      <FaStar />
      <h2>{title}</h2>
    </CategoryDiv>
  );
};

// Validaciones de props
Category.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Category;
