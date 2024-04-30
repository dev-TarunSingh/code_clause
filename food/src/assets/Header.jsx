import React from "react";
import icon from "../assets/foodicon.png";
import "../assets/header.css";

export default function Header() {
    return (
        <>
        <div className="header">
            <div className="header-content">
                <img src={icon} alt="logo" />
                <h1>Foodzie</h1>
            </div>
        </div>
        </>
    );
}