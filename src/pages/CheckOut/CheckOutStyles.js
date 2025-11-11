import { Field } from "formik";
import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  max-width: 600px;
  margin: 5%;
  background-color: bisque;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
`;

export const Title = styled.h2`
  text-align: center;
  color: #333;
`;

export const StyledField = styled(Field)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px;
  margin-top: 5px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

export const SubmitButton = styled.button`
  width: 95%;
  margin-top: 15px;
  padding: 10px;
  background-color: rgba(17, 15, 50, 0.7512254901960784);
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: rgba(29, 28, 64, 0.751);
  }
`;

export const TextContainer = styled.div`
  margin: 5%;
  font-size: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 800px;
  h1 {
    font-size: 30px;
    background: linear-gradient(
      357deg,
      rgba(17, 15, 50, 0.7512254901960784) 46%,
      rgba(13, 93, 92, 1) 83%
    );
    background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  @media (max-width: 768px) {
    width: 500px;
    font-size: 20px;
  }

  @media (max-width: 560px) {
    font-size: 20px;
    width: 300px;
    padding: 12px;
    margin-top: 5%;
  }

  @media (max-width: 480px) {
    width: 300px;
    padding: 12px;
    margin-top: 5%;
  }
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;