import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Page, Card, Title, Subtitle, Form,
  Label, Input, Button, ErrorMsg, SwitchText, Anchor, Spacer
} from "../loginRegister/loginRegisteStyles";
import { useAuth } from "../../context/AuthContext";


const LoginPage = () => {
  const { login, needsVerify, pendingEmail, verifyCode, resendCode } = useAuth();
  const navigate = useNavigate();

  // step: "login" | "verify"
  const [step, setStep] = useState("login");
  const [form, setForm] = useState({ email: "", password: "" });
  const [code, setCode] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const resp = await login(form);

    setLoading(false);
    if (resp.ok) {
      navigate("/home");
    } else if (resp.needsVerify || needsVerify) {
      // Pasamos a verificación sin navegar
      setStep("verify");
    } else {
      setErrorMsg(resp.msg || "Email o contraseña incorrectos.");
    }
  };

  const handleSubmitVerify = async (e) => {
  e.preventDefault();
  setErrorMsg("");
  setLoading(true);

  try {
    const email = pendingEmail || form.email;
    if (!email) throw new Error("Falta el email a verificar");
    if (!/^\d{4,6}$/.test(String(code))) throw new Error("Código inválido");

    const resp = await verifyCode({ email, code }); 
    if (resp?.ok) {
      navigate("/home");
    } else {
      throw new Error(resp?.msg || "Código inválido o vencido.");
    }
  } catch (err) {
    setErrorMsg(err.message || "Error verificando código");
  } finally {
    setLoading(false);
  }
};


  const handleResend = async () => {
    const r = await resendCode();
    if (!r.ok) setErrorMsg(r.msg);
  };
  
  // si el contexto ya indicó verificación, nos colocamos en ese paso
  const ctx = useAuth();
console.log("Auth ctx keys =>", Object.keys(ctx || {}));

  return (
    <Page>
      <Card>
        {step === "login" ? (
          <>
            <Title>Iniciar sesión</Title>
            <Subtitle>Bienvenido de vuelta 📚</Subtitle>

            <Form onSubmit={handleSubmitLogin}>
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

              <Label htmlFor="password" style={{ marginTop: ".25rem" }}>
                Contraseña
              </Label>
              <Input
                id="password"
                type="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                placeholder="••••••••"
                autoComplete="current-password"
              />

              {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}

              <Button type="submit" disabled={loading}>
                {loading ? "Ingresando..." : "Entrar"}
              </Button>
            </Form>

            <SwitchText>
              ¿No tenés cuenta? <Anchor to="/register">Registrarme</Anchor>
            </SwitchText>
          </>
        ) : (
          <>
            <Title>Verificación</Title>
            <Subtitle>
              Te enviamos un código a <strong>{pendingEmail}</strong>.
              Ingrésalo para continuar.
            </Subtitle>

            <Form onSubmit={handleSubmitVerify}>
              <Label htmlFor="code">Código de verificación</Label>
              <Input
                id="code"
                name="code"
                type="text"
                inputMode="numeric"
                pattern="\d{6}"
                maxLength={6}
                placeholder="123456"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                required
              />

              {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}

              <Button type="submit" disabled={loading || code.length < 4}>
                {loading ? "Verificando..." : "Verificar"}
              </Button>
            </Form>

            <SwitchText>
              ¿No te llegó?{" "}
              <button
                type="button"
                onClick={handleResend}
                style={{
                  background: "none",
                  border: "none",
                  color: "#4da6ff",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                Reenviar código
              </button>
              {"  "}·{"  "}
              <button
                type="button"
                onClick={() => setStep("login")}
                style={{
                  background: "none",
                  border: "none",
                  color: "#4da6ff",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                Cambiar email
              </button>
            </SwitchText>
          </>
        )}
      </Card>
    </Page>
  );
};

export default LoginPage;
