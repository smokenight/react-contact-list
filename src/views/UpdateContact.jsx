import { useState, useContext, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

export const UpdateContact = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const findContact = () => {
      const contactEdit = store.contactList.find(
        (element) => element.id == params.id
      );
      if (contactEdit) {
        setContact({
          name: contactEdit.name,
          email: contactEdit.email,
          phone: contactEdit.phone,
          address: contactEdit.address,
        });
      } else {
        console.error("Contacto no encontrado");
      }
    };

    findContact();
  }, [params.id, store.contactList]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setContact((prevContact) => ({ ...prevContact, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await actions.updateContact(contact, params.id);
    if (response) {
      Swal.fire("Contacto actualizado con éxito!", "", "success");
      navigate("/contactlist");
    } else {
      Swal.fire("Error al actualizar el contacto", "", "error");
    }
  };

  return (
    <div className="container custom-margin">
      <h1 className="display-4 text-center">Edit Contact</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Full Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={contact.name}
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
            name="email"
            value={contact.email}
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
            name="phone"
            value={contact.phone}
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
            name="address"
            value={contact.address}
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
