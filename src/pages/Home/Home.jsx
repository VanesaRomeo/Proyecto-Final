// src/pages/Home/Home.jsx
import { useAuth } from "../../context/AuthContext";
import { Abount } from "../../component/Abount/Abount";
import AutoPlay from "../../component/Carrousel/Carrousel";
import { Hero } from "../../component/Hero/Hero";
import { Product } from "../../component/Productos/Product";
import { HomeConteiner } from "./HomeStyles";

function Home() {
  const { user, logout, } = useAuth();

  const displayName =
    (user?.nombre ?? user?.name ?? "lector")
      .toString()
      .trim();

  const cap = (s) => s ? s.charAt(0).toUpperCase() + s.slice(1) : s;

  return (
    <HomeConteiner>
      <section
        style={{
          maxWidth: "300px",
          textAlign:"center",
          margin: "2rem auto",
          backgroundColor: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(4px)",
          borderRadius: "8px",
          padding: "1.5rem",
          color: "#000",
        }}
      >
        <h2 style={{ marginBottom: "0.5rem" }}>
          Hola {cap(displayName)} 👋
        </h2>

        <p style={{ marginBottom: "0.5rem" }}>
          Bienvenido/a a la tienda de libros.
        </p>

        <button
          onClick={logout}
          style={{
            padding: "0.5rem 1rem",
            borderRadius: "6px",
            backgroundColor: "#444",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Cerrar sesión
        </button>
      </section>

      <Hero />
      <Abount />
      <AutoPlay />
      <Product />
    </HomeConteiner>
  );
}

export default Home;
