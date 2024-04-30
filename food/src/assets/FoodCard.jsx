import React from "react";
import "../assets/foodcard.css";



export default function Foodcard({ data }) {
    return (
        <div className="food-card">
            <img className="food-image" src={data.image} alt={data.name} />
            <h2>{data.name}</h2>
            <p>{data.text}</p>
            <p>{data.type}</p>
            <button>₹{data.price}</button>
        </div>
    );
}
