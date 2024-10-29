import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import injectContext from "./store/appContext";

// Envuelve App con injectContext para proporcionar el contexto a toda la aplicación
const StoreWrappedApp = injectContext(App);

createRoot(document.getElementById("root")).render(<StoreWrappedApp />);
