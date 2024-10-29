import { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ContactCard = ({ contact }) => {
  const { actions } = useContext(Context);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Estás seguro que deseas eliminar el contacto?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Aceptar",
      denyButtonText: "Cancelar",
    });

    if (result.isConfirmed) {
      actions.deleteContact(id);
      console.log(`Contacto eliminado: ${id}`);
      Swal.fire("Contacto eliminado con éxito", "", "success");
    } else if (result.isDenied) {
      Swal.fire("El contacto NO fue eliminado", "", "info");
    }
  };

  return (
    <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12 mb-3">
      <div className="card card-default p-2 contact-card d-flex flex-row justify-content-between align-items-start">
        <div className="media-body ms-3">
          <img
            src="https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png"
            className="mr-3 img-fluid rounded"
            alt="Avatar Image"
          />
          <h5 className="mt-0 mb-2 text-dark">{contact.name}</h5>
          <ul className="list-unstyled text-smoke">
            <li className="d-flex">
              <i className="mdi mdi-map mr-1"></i>
              <span>{contact.address}</span>
            </li>
            <li className="d-flex">
              <i className="mdi mdi-email mr-1"></i>
              <span>{contact.email}</span>
            </li>
            <li className="d-flex">
              <i className="mdi mdi-phone mr-1"></i>
              <span>{contact.phone}</span>
            </li>
          </ul>
        </div>
        <div className="d-flex flex-column align-items-end">
          <Link
            to={`/addcontact/${contact.id}`}
            className="btn btn-warning mb-2"
          >
            <i className="bi bi-pencil"></i>
          </Link>
          <button
            onClick={() => handleDelete(contact.id)}
            className="btn btn-danger"
          >
            <i className="bi bi-trash3 icon-large"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
