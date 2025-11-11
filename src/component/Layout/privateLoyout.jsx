// src/component/layout/PrivateLayout.jsx
import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar.js";   // <-- default import
    // <-- default import (si tu footer es default)
import { Layout } from "./Layout."
import { Footer } from "../Footer/Footer.jsx";

const PrivateLayout = () => {
  return (
    <Layout>
      <Navbar />
      <main style={{ minHeight: "70vh", width: "100%" }}>
        <Outlet />
      </main>
      <Footer />
    </Layout>
  );
};

export default PrivateLayout;
