// src/context/AuthContext.jsx
import PropTypes from "prop-types";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
console.log("VITE_API_URL =>", import.meta.env.VITE_API_URL);
const API = `${(import.meta.env.VITE_API_URL ?? "http://localhost:3002").replace(/\/+$/, "")}/api`;
console.log("API =>", API);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [needsVerify, setNeedsVerify] = useState(false);
  const [pendingEmail, setPendingEmail] = useState("");

  // Rehidratar
  useEffect(() => {
    const raw = localStorage.getItem("auth");
    if (!raw) return;
    try {
      const { user: u, token: t } = JSON.parse(raw);
      if (u && t) { setUser(u); setToken(t); }
    } catch { localStorage.removeItem("auth"); }
  }, []);

  // Persistir
  useEffect(() => {
    if (user && token) localStorage.setItem("auth", JSON.stringify({ user, token }));
    else localStorage.removeItem("auth");
  }, [user, token]);

  // ---- LOGIN ----
  const login = async ({ email, password }) => {
    try {
      const res = await fetch(`${API}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, contraseña: password }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        return { ok: false, msg: err?.msg || "Credenciales inválidas" };
      }

      const data = await res.json();

      // si requiere verificación NO guardes token todavía
      if (data.needsVerify) {
        setNeedsVerify(true);
        setPendingEmail(data.email || email);
        return { ok: false, needsVerify: true, email: data.email || email, msg: data.msg };
      }

      const u = data.usuario ?? data.user ?? null;
      const t = data.elToken ?? data.token ?? "";
      if (!u || !t) return { ok: false, msg: "Respuesta inválida del servidor" };

      setUser(u); setToken(t);
      setNeedsVerify(false); setPendingEmail("");
      return { ok: true };
    } catch (err) {
      console.error(err);
      return { ok: false, msg: "Error de red" };
    }
  };

  // ---- VERIFY CODE ----
  const verifyCode = async ({ email, code }) => {
    try {
      const res = await fetch(`${API}/auth/verify`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, code: String(code).trim() }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        return { ok: false, msg: err?.msg || "Código inválido" };
      }

      const data = await res.json();
      const u = data.usuario ?? data.user ?? null;
      const t = data.elToken ?? data.token ?? "";
      if (!u || !t) return { ok: false, msg: "Respuesta inválida del servidor" };

      setUser(u); setToken(t);
      setNeedsVerify(false); setPendingEmail("");
      return { ok: true };
    } catch (e) {
      console.error(e);
      return { ok: false, msg: "Error de red" };
    }
  };

  // ---- RESEND CODE ----
  const resendCode = async ({ email }) => {
    try {
      const res = await fetch(`${API}/auth/resend-code`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        return { ok: false, msg: err?.msg || "No se pudo reenviar el código" };
      }
      return { ok: true };
    } catch (e) {
      console.error(e);
      return { ok: false, msg: "Error de red" };
    }
  };

  const logout = () => {
    setUser(null);
    setToken("");
    setNeedsVerify(false);
    setPendingEmail("");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token,
        needsVerify,        
        pendingEmail,      
        login,
        verifyCode,        
        resendCode,        
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = { children: PropTypes.node.isRequired };
export default AuthContext;
