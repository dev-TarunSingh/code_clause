import React from "react";
import { useState } from "react";
import "../assets/filters.css";

export default function Filters({ setSelectedType }) {
    var [SelectedType, setSelectedType] = useState('all');

    return (
        <>
        <div className="filters">
            <button onClick={() => setSelectedType('all')} className="filter-button">All</button>
            <button onClick={() => setSelectedType('breakfast')} className="filter-button">Breakfast</button>
            <button onClick={() => setSelectedType('lunch')} className="filter-button">Lunch</button>
            <button onClick={() => setSelectedType('dinner')} className="filter-button">Dinner</button>
        </div>
        <ChildComponent selectedType={SelectedType} /> {/* Pass SelectedType as a prop to ChildComponent */}
        </>
    );
}

export function ChildComponent({ selectedType }) {
    console.log(selectedType);
}