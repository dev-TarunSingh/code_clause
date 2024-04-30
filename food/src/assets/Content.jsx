import React from "react";
import "../assets/foodcard.css";
import "./Contents.css";
import {items} from "../assets/data/items.js";
import  Foodcard from "../assets/FoodCard.jsx";
import { ChildComponent } from "../assets/Filters.jsx";

function Content() {
  
  return (
    <div className="content">
      {items.map((item, index) => <Foodcard key={index} data={item} />)}
    </div>
  );
}

export default Content;
