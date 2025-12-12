import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Page, Card, Title, Subtitle, Form,
  Label, Input, Button, SwitchText, Anchor, Spacer
} from "../loginRegister/loginRegisteStyles";
import { useAuth } from "../../context/AuthContext";

const RegisterPage = () => {
  const { registerUser } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");
    try {
      await registerUser(form);
      navigate("/login");
    } catch (e) {
      setErrorMsg(
        e?.message || "No se pudo registrar. Probá de nuevo."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <Card>
        <Title>Crear cuenta</Title>
        <Subtitle>Unite a la librería 📖✨</Subtitle>

        <Form onSubmit={handleSubmit}>
          <Label htmlFor="name">Nombre</Label>
          <Input
            id="name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Tu nombre"
            autoComplete="name"
          />

          <Spacer />

          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="tucorreo@example.com"
            autoComplete="email"
          />

          <Spacer />

          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
            placeholder="mínimo 6 caracteres"
            autoComplete="new-password"
          />

          {errorMsg && <p style={{ color: "#ff6b6b" }}>{errorMsg}</p>}

          <Button type="submit" disabled={loading}>
            {loading ? "Creando..." : "Registrarme"}
          </Button>
        </Form>

        <SwitchText>
          ¿Ya tenés cuenta? <Anchor to="/login">Iniciar sesión</Anchor>
        </SwitchText>
      </Card>
    </Page>
  );
};

export default RegisterPage;
