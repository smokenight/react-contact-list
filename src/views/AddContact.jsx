import { useState, useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const params = useParams();

  const [inputValue, setInputValue] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
  });

  useEffect(() => {
    if (params.id) {
      const contactToEdit = store.contactList.find(
        (contact) => contact.id === parseInt(params.id)
      );

      if (contactToEdit) {
        setInputValue({
          fullName: contactToEdit.name,
          email: contactToEdit.email,
          phone: contactToEdit.phone,
          address: contactToEdit.address,
        });
      } else {
        console.error("Contacto no encontrado");
      }
    }
  }, [params.id, store.contactList]);

  const handleInputChange = (event) => {
    const { id, value } = event.target;
    setInputValue((prevState) => ({ ...prevState, [id]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const contact = {
      name: inputValue.fullName || "Fernando", // Valor predeterminado
      email: inputValue.email || "feño@gmail.com",
      phone: inputValue.phone || "9-9986425",
      address: inputValue.address || "Santiago",
    };

    let response;
    if (params.id) {
      response = await actions.updateContact(contact, params.id);
    } else {
      response = await actions.createContact(contact);
    }

    console.log(response);

    if (response) {
      const message = params.id
        ? "Contacto editado con éxito"
        : "Contacto agregado con éxito";
      Swal.fire(message, "", "success");
      setInputValue({ fullName: "", email: "", phone: "", address: "" });
    } else {
      Swal.fire("Error al agregar contacto", "", "error");
    }
  };

  return (
    <div className="container custom-margin">
      <h1 className="display-4 text-center">
        {params.id ? "Edit Contact" : "Add a new contact"}
      </h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="fullName"
            value={inputValue.fullName}
            onChange={handleInputChange}
            placeholder="Full Name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="email"
            value={inputValue.email}
            onChange={handleInputChange}
            placeholder="Enter Email"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            value={inputValue.phone}
            onChange={handleInputChange}
            placeholder="Enter Phone"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={inputValue.address}
            onChange={handleInputChange}
            placeholder="Enter Address"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Save
        </button>
      </form>
      <Link to="/contactlist">or get back to contacts</Link>
    </div>
  );
};
