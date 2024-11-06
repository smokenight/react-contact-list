import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleItem = () => {
    const { store } = useContext(Context);
    const params = useParams();

    return (
        <div className="jumbotron">
            <h1 className="display-4">
                Elementos: {store.demo[params.theid]?.title}
            </h1>
            <hr className="my-4" />
            <Link to="/">
                <span className="btn btn-primary btn-lg" role="button">
                    Back home
                </span>
            </Link>
        </div>
    );
};

SingleItem.propTypes = {
    
};
