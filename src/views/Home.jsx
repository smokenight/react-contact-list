import { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Home = () => {
  const { actions } = useContext(Context);

  useEffect(() => {
    actions.logHomeRender();
  }, [actions]);
  return (
    <div className="container mt-5">
      <div className="jumbotron jumbotron-fluid text-center"></div>

      {/* Card con descripcion */}
      <div className="card mt-4 card-rounded text-center">
        <div className="card-header">
          <h2 className="mb-0">Welcome to your contact list</h2>
        </div>
        <div className="card-body">
          <p className="card-text">
            To see the complete list of your contacts, click on the button in
            the center
          </p>
          <Link to="/contactlist">
            <button className="btn btn-info mx-2">View Contacts</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
