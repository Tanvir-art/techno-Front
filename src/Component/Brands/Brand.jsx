import React from "react";
import { Link } from "react-router-dom";

const Brand = ({ brand }) => {
  const { image_url, brandName } = brand;
  return (
    <Link to={`/brand/${brandName}`}>
      <div>
        <div className="card  bg-base-100 shadow-xl">
          <figure>
            <img
              className="h-[300px] object-cover"
              src={image_url}
              alt="brands"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title mx-auto">{brandName}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Brand;
