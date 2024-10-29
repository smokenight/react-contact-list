import { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../components/ContactCard";

const ContactList = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getContactList();
  }, []);

  const handleAddContact = async () => {
    const newContact = {
      name: "Nuevo Contacto",
      address: "Dirección", // Agrega otros campos según sea necesario
      email: "email@ejemplo.com",
      phone: "123456789",
    };

    const result = await actions.createContact(newContact); // Llama a createContact
    if (result) {
      console.log(`Contacto agregado: ${newContact.name}`);
    } else {
      console.error("Error al agregar el contacto");
    }
  };

  return (
    <div className="container mt-5">
      <div className="content contact-list">
        <div className="card card-default">
          <div className="card-header d-flex align-items-center justify-content-between px-3 px-md-5">
            <h2>Contacts</h2>
            <div className="d-flex ms-auto">
              <button className="btn btn-info me-2" onClick={handleAddContact}>
                <i className="bi bi-plus-square-fill"></i>
              </button>
            </div>
          </div>
          <div className="card-body px-3 px-md-5">
            {!store.contactList || !store.contactList.length ? (
              <div>No tienes contactos agregados</div>
            ) : (
              <div className="row">
                {store.contactList.map((contact) => (
                  <ContactCard key={contact.id} contact={contact} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
