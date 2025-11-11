import { ButtonStylesConteiner } from './ButonStyles';
import PropTypes from 'prop-types';

const Button = ({
  children,
  type = 'button',
  disabled = false,
  onClick = (e) => e.preventDefault(),
}) => {
  return (
    <ButtonStylesConteiner
      whileHover={{ scale: 1.2 }}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </ButtonStylesConteiner>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.string,
};

export default Button;
