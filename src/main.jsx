import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/Store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
     
      <App />
      <GlobalStyles />
    </PersistGate>
  </Provider>
);
