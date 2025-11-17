// import { BrowserRouter as Router } from "react-router-dom";
// import { AuthProvider } from "./context/AuthContext";
// import AppRoutes from "./routes/Routes";

// function App() {
//   return (
//     <AuthProvider>
//       <Router>
//         <AppRoutes />
//       </Router>
//     </AuthProvider>
//   );
// }

// export default App;
import { BrowserRouter as Router } from "react-router-dom";


import { Layout } from "./component/Layout/Layout";
import { Navbar } from "./component/Navbar/Navbar.jsx";

import AppRoutes from "./routes/Routes.jsx";
import { AuthProvider, useAuth } from "./context/AuthContext.jsx";
import { Footer } from './component/Footer/Footer';

function Shell() {
  const { isAuthenticated } = useAuth();

  return (
    <Layout>
      {isAuthenticated && <Navbar />}

      <AppRoutes />

      {isAuthenticated && <Footer/>}
    </Layout>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <Shell />
      </Router>
    </AuthProvider>
  );
}

export default App;
