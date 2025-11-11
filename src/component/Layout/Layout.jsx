import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const LayoutWrapper = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Layout = ({ children }) => {

  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  
  return (
    <>
      <LayoutWrapper>{children}</LayoutWrapper>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
