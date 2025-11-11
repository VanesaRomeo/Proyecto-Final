import { useLocation, useNavigate } from 'react-router-dom';
import { KnouwContainer } from './ConocenosStyles';
import Button from '../../component/UI/Button/Button';
import { FaClock } from 'react-icons/fa6';
import { FaHandshake } from 'react-icons/fa';
import { FaBookAtlas } from 'react-icons/fa6';
import { FaUserFriends } from 'react-icons/fa';
import { PiMedalFill } from 'react-icons/pi';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { useEffect } from 'react';

export const Conocenos = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);
  const navigate = useNavigate();
  return (
    <KnouwContainer>
      <h1>Nuestra Historia</h1>
      <h2>
        ¿como comenzo? <br />
        <FaClock />
      </h2>
      <p>
        Nuestra historia comenzó con una simple pasión por los libros. Desde
        jóvenes, nos sumergimos en mundos imaginarios y aventuras narradas que
        dejaron huella en nosotros. Con la idea de compartir esa pasión,
        decidimos crear un espacio donde lectores de todo tipo puedan encontrar
        su próximo gran libro.
      </p>
      <h2>
        Nuestra Mision <br /> <FaHandshake size={32} />
      </h2>
      <p>
        Nuestra misión es acercar la magia de la lectura a todas las personas,
        ofreciendo una selección curada de libros que inspiran, educan y
        entretienen. Creemos en el poder de los libros para cambiar vidas y en
        la importancia de hacer que el conocimiento sea accesible para todos.
      </p>

      <h2>
        Nuestra seleccion de libros <br />
        <FaBookAtlas size={32} />{' '}
      </h2>
      <p>
        Nos enorgullecemos de ofrecer una selección de libros que abarca desde
        los grandes clásicos hasta las novedades más esperadas. Cada libro en
        nuestra tienda ha sido cuidadosamente seleccionado para asegurar que
        ofrecemos algo para cada tipo de lector.
      </p>

      <h2>
        Nuestro Equipo <br />
        <FaUserFriends size={32} />
      </h2>
      <p>
        Nuestro equipo está formado por lectores apasionados que disfrutan
        recomendando libros y compartiendo su amor por la literatura. Cada uno
        de nosotros tiene su género favorito y siempre estamos dispuestos a
        guiarte en tu próxima aventura literaria.
      </p>

      <h2>
        Nuestros Valores <br />
        <PiMedalFill size={32} />
      </h2>
      <p>
        Creemos en un futuro sostenible. Por eso, trabajamos con editoriales que
        comparten nuestra visión y utilizamos empaques reciclados para nuestros
        envíos. Queremos que la lectura no solo sea enriquecedora, sino también
        responsable.
      </p>

      <h2>
        Cómo Comprar en Nuestra Tienda <br /> <BsFillCartCheckFill size={32} />
      </h2>
      <p>
        Comprar en nuestra tienda es fácil y rápido. Ofrecemos múltiples
        opciones de pago y enviamos tus libros a cualquier parte del país. Si
        tienes alguna pregunta, nuestro equipo de atención al cliente estará
        encantado de asistirte en cualquier momento.
      </p>

      <Button onClick={() => navigate('/')}>volver</Button>
    </KnouwContainer>
  );
};
