import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../../context/AuthContext"

import {
  CheckoutContainer, ErrorText, StyledField, SubmitButton, TextContainer, Title
} from "./CheckOutStyles"
import { createOrder } from "../../service/orders";
import { emptyCart } from "../../redux/features/cart/cartSlice";

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).required(),
  address: Yup.string().min(5).required(),
  phone: Yup.string().matches(/^[0-9]{10,15}$/, "Teléfono inválido").required(),
  email: Yup.string().email().required(),      // <-- agreguemos email
});

export default function Checkout() {
 const { itemsInCart } = useSelector((s) => s.cart);
const { token } = useAuth();
const dispatch = useDispatch();

const subtotal = itemsInCart.reduce((acc, it) => acc + it.precio * it.quantity, 0);
const shipping = subtotal > 20000 ? 0 : 1500;
const total = subtotal + shipping;

const handleSubmit = async (values, { resetForm }) => {
  try {
    if (!token) throw new Error("Debés iniciar sesión");

    const items = itemsInCart.map((it) => ({
      id: it.id,
      titulo: it.titulo ?? it.title ?? "",
      precio: it.precio,
      cantidad: it.quantity,
    }));

    const payload = {
      items,
      price: subtotal,
      shippingCost: shipping,
      total,
      shippingDetails: {
        nombre: values.name,
        email: values.email,        // ✅ agregá este campo a tu form si no está
        telefono: values.phone,
        direccion: values.address,
      },
    };

    await createOrder({ token, payload });

    Swal.fire("¡Pedido enviado!", "Te mandamos confirmación por email.", "success");
    dispatch(emptyCart());
    resetForm();
  } catch (e) {
    console.error(e);
    Swal.fire("Error", e.message || "No se pudo crear el pedido", "error");
  }
};

  return (
    <Formik
      initialValues={{ name: "", email:"", address: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <TextContainer>
          <h1>Formulario de pedido</h1>
          <CheckoutContainer>
            <Title>Completa tus Datos para Finalizar</Title>
            <Form>
              <StyledField type="text"  name="name"    placeholder="Nombre y Apellido" />
              <ErrorMessage name="name" component={ErrorText} />

              <StyledField type="email" name="email"   placeholder="Email" />
              <ErrorMessage name="email" component={ErrorText} />

              <StyledField type="text"  name="address" placeholder="Dirección" />
              <ErrorMessage name="address" component={ErrorText} />

              <StyledField type="tel"   name="phone"   placeholder="Teléfono" />
              <ErrorMessage name="phone" component={ErrorText} />

              <SubmitButton type="submit">Pagar ${total}</SubmitButton>
            </Form>
          </CheckoutContainer>
        </TextContainer>
      )}
    </Formik>
  );
}
