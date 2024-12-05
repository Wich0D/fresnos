import React from "react";
import "../../styles/index.css"

function HotelBoxInfo({ title, description, image }) {
    return (
      <div className="index-options">
        <img src={image} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
        <button>Ver más</button>
      </div>
    );
  }
export default HotelBoxInfo;