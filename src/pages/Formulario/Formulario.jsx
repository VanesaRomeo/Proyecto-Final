import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import {
  TextContainer, FormContainer, InputStyled,
  ErrorMessageStyled, SubmitButton, FormStyled,
  TextAreaStyled
} from "./FormularioStyles";

const Email = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

const validationSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Debe tener al menos 3 caracteres")
    .required("Nombre y apellido requerido"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Solo se permiten números")
    .min(10, "Debe tener al menos 10 dígitos")
    .required("Número de teléfono requerido"),
  email: Yup.string()
    .matches(Email, "Email no valido")
    .required("Correo electrónico requerido"),
  comment: Yup.string()
    .trim()
    .max(100, "El comentario no puede exceder 100 caracteres")
    .required("Comentario requerido"),
});

const Formulario = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <Formik
      initialValues={{ fullName: "", phoneNumber: "", email: "", comment: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        // ⚠️ Acá “se envía”: reemplazá por tu endpoint real
        // await fetch("/api/contacto", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(values) });
        console.log("Formulario enviado:", values);
        resetForm();
      }}
    >
      {() => (
        <TextContainer>
          <h1>Contacto</h1>
          <p>
            Estamos aquí para hacer que tu experiencia sea excelente. Completá
            el formulario y te ayudamos con tus dudas.
          </p>

          <FormContainer>
            <h2>Formulario de Contacto</h2>

           <FormStyled>
  <InputStyled
    type="text"
    name="fullName"
    placeholder="Nombre y Apellido"
  />
  <ErrorMessage name="fullName" component={ErrorMessageStyled} />

  <InputStyled
    type="text"
    name="phoneNumber"
    placeholder="Número de Teléfono"
  />
  <ErrorMessage name="phoneNumber" component={ErrorMessageStyled} />

  <InputStyled
    type="email"
    name="email"
    placeholder="Correo Electrónico"
  />
  <ErrorMessage name="email" component={ErrorMessageStyled} />

  {/* ✅ textarea correcto, conectado a Formik */}
  <TextAreaStyled
    name="comment"
    placeholder="Comentario"
    rows="4"
  />
  <ErrorMessage name="comment" component={ErrorMessageStyled} />

  <SubmitButton type="submit">Enviar</SubmitButton>
</FormStyled>
          </FormContainer>
        </TextContainer>
      )}
    </Formik>
  );
};

export default Formulario;
