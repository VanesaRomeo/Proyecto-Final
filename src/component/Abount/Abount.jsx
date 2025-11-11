import { useNavigate } from 'react-router-dom';
import Button from '../UI/Button/Button';
import { AbountInfo } from './AbountStyles';

export const Abount = () => {
  
  const navigate = useNavigate();
  return (
    <AbountInfo id="abount">
      <h2>Conoce nuestra historia</h2>
      <p>
        En nuestra tienda encontrarás una gran variedad de libros para todos los
        gustos, desde novelas hasta textos académicos. Nuestro objetivo es
        fomentar la lectura y acercar el conocimiento a todos.
      </p>

      <Button onClick={() => navigate('/Conocenos')}>ven a conocer</Button>
    </AbountInfo>
  );
};
