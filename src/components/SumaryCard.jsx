import React from "react";

export default function Card(props) {
  return (
    <div className="summary-card">
      <h2>{props.tittle}</h2>
      <p>{props.value}</p>
    </div>
  )
}