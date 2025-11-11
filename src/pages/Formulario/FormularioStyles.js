import styled from 'styled-components';
import { Field , Form as FormikForm } from 'formik';

/* Breakpoints por si querés reusar */
const bp = {
  md: 768,
  sm: 560,
  xs: 480,
};

export const FormStyled = styled(FormikForm)`
  display: grid;
  gap: .75rem;
`;
export const TextContainer = styled.div`
  /* Ocupa todo el ancho disponible y centra el contenido */
  width: 100%;
  max-width: 980px;
  margin: 5% auto;
  padding: 0 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center; /* mejora legibilidad en mobile */

  /* Texto con gradiente como ya usabas */
  p,
  h1 {
    background: linear-gradient(
      357deg,
      rgba(17, 15, 50, 0.7512254901960784) 46%,
      rgba(13, 93, 92, 1) 83%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0; /* evita saltos */
  }

  h1 {
    font-size: clamp(1.25rem, 3.5vw, 2rem);
    line-height: 1.2;
  }

  p {
    margin-top: .5rem;
    font-size: clamp(0.95rem, 2.6vw, 1.25rem);
    max-width: 70ch; /* buena longitud de línea */
  }
`;

export const FormContainer = styled.div`
  margin-top: 24px;
  width: 100%;
  max-width: 420px;
  padding: 20px;
  background-color: bisque;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,.1);

  h2 {
    text-align: center;
    margin: 0 0 12px 0;
    font-size: clamp(1rem, 2.6vw, 1.25rem);
  }

  /* Tablet y abajo */
  @media (max-width: ${bp.md}px) {
    padding: 16px;
  }

  /* Mobile S */
  @media (max-width: ${bp.xs}px) {
    padding: 12px;
  }
`;

export const InputStyled = styled(Field)`
  width: 100%;
  padding: 10px 12px;
  margin: 10px 0;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  background: #fff; /* contraste sobre bisque */
  color: #111;

  &:focus {
    outline: none;
    border-color: #0d5d5c;
    box-shadow: 0 0 0 3px rgba(13,93,92,.2);
  }

  /* Para el textarea cuando uses as="textarea" */
  &[as="textarea"] {
    resize: vertical;
  }
`;

export const ErrorMessageStyled = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -6px;
  margin-bottom: 10px;
  text-align: left; /* más claro debajo del input */
`;
export const TextAreaStyled = styled(Field).attrs({ as: "textarea" })`
  width: 100%;
  padding: 10px 12px;
  margin: 10px 0;
  border: 1px solid black;
  border-radius: 4px;
  font-size: 16px;
  background: #fff;
  color: #111;
  resize: vertical;
  min-height: 110px;

  &:focus {
    outline: none;
    border-color: #0d5d5c;
    box-shadow: 0 0 0 3px rgba(13,93,92,.2);
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: rgba(17, 15, 50, 0.75);
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  cursor: pointer;
  transition: filter .15s ease, transform .05s ease;

  &:hover { filter: brightness(1.05); }
  &:active { transform: translateY(1px); }
`;
