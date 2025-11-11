
import styled from "styled-components";
import { Link } from "react-router-dom";

/* Breakpoints comunes */
const bp = {
  xs: 360,   // móviles muy pequeños
  sm: 480,   // móviles
  md: 768,   // tablets
  lg: 1024,  // laptops
  xl: 1440,  // desktop grande
  xxl: 1920, // 2K/4K base
};

/* Helpers: media queries */
const mqMax = (px) => `@media (max-width: ${px}px)`;
const mqMin = (px) => `@media (min-width: ${px}px)`;

/* Layout base */
export const Page = styled.main`
  min-height: 100dvh;
  display: grid;
  place-items: center;
  padding: 1rem;
  color: #fff;
 
`;

export const Card = styled.section`
  width: 100%;
  max-width: 380px;
  background: #1e1e1e;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 20px 40px rgba(0,0,0,.6);

  ${mqMax(bp.sm)} {
    padding: 1.25rem;
    border-radius: 10px;
    max-width: 94vw;
  }

  ${mqMin(bp.md)} {
    max-width: 420px;
  }

  ${mqMin(bp.lg)} {
    max-width: 460px;
  }

  ${mqMin(bp.xl)} {
    max-width: 520px;
    padding: 2.25rem;
  }
`;

export const Title = styled.h1`
  margin: 0;
  font-weight: 600;
  font-size: clamp(1.1rem, 2.4vw, 1.6rem);
`;

export const Subtitle = styled.p`
  margin-top: .5rem;
  font-size: clamp(.85rem, 1.9vw, .95rem);
  color: #bbb;
`;

export const Form = styled.form`
  margin-top: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  font-size: .8rem;
  margin-bottom: .5rem;

  ${mqMax(bp.sm)} {
    font-size: .78rem;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: .7rem .8rem;
  border-radius: 8px;
  border: 1px solid #444;
  background: #2a2a2a;
  color: #fff;
  outline: none;
  transition: border-color .15s ease, box-shadow .15s ease;

  &:focus {
    border-color: #4da6ff;
    box-shadow: 0 0 0 3px rgba(77,166,255,.2);
  }

  &::placeholder {
    color: #9a9a9a;
  }
`;

export const Spacer = styled.div`
  height: 1rem;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 1.5rem;
  background: #4da6ff;
  border: none;
  border-radius: 8px;
  color: #0f0f0f;
  font-weight: 700;
  padding: .85rem;
  cursor: pointer;
  transition: transform .06s ease, filter .2s ease;

  &:hover { filter: brightness(1.05); }
  &:active { transform: translateY(1px); }

  ${mqMin(bp.xl)} {
    padding: 1rem;
    border-radius: 10px;
  }
`;

export const ErrorMsg = styled.p`
  color: #ff6b6b;
  font-size: .8rem;
  margin-top: .5rem;

  ${mqMin(bp.xl)} {
    font-size: .85rem;
  }
`;

export const SwitchText = styled.p`
  text-align: center;
  font-size: .8rem;
  color: #999;
  margin-top: 1.5rem;
`;

export const Anchor = styled(Link)`
  color: #4da6ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

/* Separadores verticales mayores según viewport */
export const VGap = styled.div`
  height: 1rem;

  ${mqMin(bp.md)} { height: 1.25rem; }
  ${mqMin(bp.lg)} { height: 1.5rem; }
`;
