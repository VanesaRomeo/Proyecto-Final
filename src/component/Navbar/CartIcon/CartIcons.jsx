import { useDispatch, useSelector } from 'react-redux';

import { FaShoppingCart } from 'react-icons/fa';

import { CartBadge, CartContainer } from '../NavbarStyles';
import { toggleCartVisibility } from '@/redux/features/cart/cartSlice';

const CartIcons = () => {
  const total = useSelector((state) => state.cart.itemsInCart).reduce(
    (acc, item) => {
      return (acc += item.quantity);
    },
    0
  );
  const dispatch = useDispatch();

  return (
    <CartContainer onClick={() => dispatch(toggleCartVisibility())}>
      <FaShoppingCart />
      <CartBadge>{total}</CartBadge>
    </CartContainer>
  );
};

export default CartIcons;
