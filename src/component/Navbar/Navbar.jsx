
  
import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { motion } from "framer-motion";


import CartModel from "../CartModel/CartModel";
import { MenuHamburguesa } from "../MenuHamburguesa/MenuHamburguesa";
import CartIcons from "./CartIcon/CartIcons";

// 🔥 estilos (tus styled-components)
import {
  HeaderConteiner,
  LinksAndCartContainer,
  LinksContainer,
  LiBack,
  CartContainer,
  ContainerModelCart,
} from "./NavbarStyles.js"

// 🔥 redux actions SIN alias "@"
import {
  closeMenu,
  toggleMenu,
} from"../../redux/features/menuSlice.js";


export const Navbar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  const isMenuOpen = useSelector((state) => state.menu.isMenuOpen);

  const isHomePage = location.pathname === "/";
  // normalizo a minúsculas para que no dependa de mayúsculas
  const isProductsPage =
    location.pathname.toLowerCase() === "/productos";

  // cerrar menú y scrollear para arriba cuando cambie la ruta
  useEffect(() => {
    dispatch(closeMenu());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname, dispatch]);

  return (
    <HeaderConteiner>
      {/* logo */}
      <img
        src="https://res.cloudinary.com/dc15c8nx7/image/upload/v1732836113/logo1_copy_l1ho8j.png"
        alt="logo"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/");
          dispatch(closeMenu());
        }}
      />

      <LinksAndCartContainer>
        <MenuHamburguesa handleClicked={() => dispatch(toggleMenu())} />

        <LinksContainer $clicked={isMenuOpen}>
          {isHomePage ? (
            <>
              <li>
                <Link
                  to="hero"
                  smooth={true}
                  duration={500}
                  onClick={() => dispatch(closeMenu())}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="about"
                  smooth={true}
                  duration={500}
                  onClick={() => dispatch(closeMenu())}
                >
                  Conócenos
                </Link>
              </li>

              <li>
                <Link
                  to="products"
                  smooth={true}
                  duration={500}
                  onClick={() => dispatch(closeMenu())}
                >
                  Productos
                </Link>
              </li>
            </>
          ) : (
            <LiBack
              onClick={() => {
                navigate(-1);
                dispatch(closeMenu());
              }}
            >
              Volver
            </LiBack>
          )}
        </LinksContainer>

        {isProductsPage && (
          <>
            <motion.div whileHover={{ scale: 1.2 }}>
              <CartContainer>
                <CartIcons />
              </CartContainer>
            </motion.div>

            <ContainerModelCart>
              <CartModel />
            </ContainerModelCart>
          </>
        )}
      </LinksAndCartContainer>
    </HeaderConteiner>
  );
};
