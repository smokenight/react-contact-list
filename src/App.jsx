import { BrowserRouter, Routes, Route } from "react-router-dom";
import injectContext from "./store/appContext";

import { Home } from "./views/Home"; // Asegúrate de importar Home
import ContactList from "./views/ContactList";
import { AddContact } from "./views/AddContact";
import { UpdateContact } from "./views/UpdateContact";
import { NotFound } from "./views/NotFound";
import { Navbar } from "./components/Navbar"; // Importa el Navbar
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contactlist" element={<ContactList />} />
        <Route path="/addcontact" element={<AddContact />} />
        <Route path="/addcontact/:id" element={<AddContact />} />
        <Route path="/update/:id" element={<UpdateContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default injectContext(App);
