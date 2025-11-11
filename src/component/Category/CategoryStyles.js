import styled from 'styled-components';
import { motion } from 'framer-motion';

export const CategoryContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 15px;
  padding: 30px;
  margin-bottom: 2%;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: thin;
  scrollbar-color: rgba(13, 93, 92, 1) #f8f9fa;

  /* Ajustes responsivos */
  @media (max-width: 1200px) {
    gap: 10px;
    padding: 20px;
  }

  @media (max-width: 768px) {
    gap: 8px;
    padding: 15px;
  }

  @media (max-width: 480px) {
    gap: 5px;
    padding: 10px;
    
  }
`;

export const CategoryDiv = styled(motion.div)`
  padding: 0.5rem 1rem;
  background-color: blanchedalmond;
  color: rgba(13, 93, 92, 1);
  border: 1px solid rgba(13, 93, 92, 1);
  border-radius: 50px;
  cursor: pointer;
  font-size: 15px;
  width: auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-width: 90px;

  /* Ajustes responsivos */
  @media (max-width: 1200px) {
    font-size: 14px;
    padding: 0.4rem 0.8rem;
    min-width: 80px;
  }

  @media (max-width: 768px) {
    font-size: 13px;
    padding: 0.3rem 0.6rem;
    min-width: 70px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    padding: 0.2rem 0.5rem;
    min-width: 70px;
  }
`;
