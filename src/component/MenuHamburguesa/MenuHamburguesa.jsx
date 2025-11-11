import { MenuContainer } from './MenuHamburguesaStyles';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { TiThMenu } from 'react-icons/ti';

export const MenuHamburguesa = ({ handleClicked }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      onClick={handleClicked}
      style={{ cursor: 'pointer' }}
    >
      <MenuContainer>
        <TiThMenu />
      </MenuContainer>
    </motion.div>
  );
};

MenuHamburguesa.propTypes = {
  handleClicked: PropTypes.func.isRequired,
};

console.log(MenuHamburguesa);
