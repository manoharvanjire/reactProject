import React, { useState } from "react";

export default function Card({ item }) {
  const [show, setShow] = useState("none");
  return (
    <>
      <div
        className="card"
        key={item.id_product}
        onMouseEnter={() => setShow("block")}
        onMouseLeave={() => setShow("none")}
      >
        <div className="img-detail" style={{ position: "relative" }}>
          <img className="img" src={item.image} />
          <div
            style={{
              display: show,
              position: "absolute",
              bottom: "0px",
              width: "100%"
            }}
            className="details"
          >
            VIEW DETAILS
          </div>
        </div>

        <div className="discription">
          <div className="child">{item.name}</div>
          <div className="child">Rs.{item.price}</div>
          <div
            className="child"
            style={{
              display: show,
              width: "100%"
            }}
          >
            Size-
            {item.size.split(",").join("").split("[").join(" ").split("]")}
          </div>
        </div>
      </div>
    </>
  );
}