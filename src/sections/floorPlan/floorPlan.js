import React from "react";
import "../floorPlan/floorPlan.styles.scss";
import Floor from "../../assets/floorImg.svg";
import Button from "@material-ui/core/Button";

const floorPlanData = [
  {
    id: 1,
    type: "With SQ/FT",
    quantity: "163",
    size: "1.39 GB",
    rooms: "Full Model",
    room1: "Basement",
    room2: "First Floor",
    room3: "Second Floor",
  },
  {
    id: 2,
    type: "Without SQ/FT",
    quantity: "163",
    size: "1.39 GB",
    rooms: "Full Model",
    room1: "Basement",
    room2: "First Floor",
    room3: "Second Floor",
  },
];
export default function FloorPlan() {
  return (
    <section id="floorPlan">
      <div>
        <h1>Floor plan</h1>
        <p>
          We are very excited to offer our VIRTUAL STAGING service To help our
          clients adapt to the fast-changing environment of today’s Real Estate
          Market and bring the best possible value proposition to your listings
          marketing.
        </p>
      </div>
      {floorPlanData.map((floorData) => (
        <div key={floorData.id} className="floorSection">
          <div className="floorInfo">
            <h1> {floorData.type}</h1>
            <p>
              Qunatity: {floorData.quantity} • Size: {floorData.size}
            </p>
          </div>
          <div className="floorTypes">
            <img src={Floor} alt={floorData.rooms} />
            <h5>{floorData.rooms}</h5>
            <img src={Floor} alt={floorData.room1} />
            <h5>{floorData.room1}</h5>
            <img src={Floor} alt={floorData.room2} />
            <h5>{floorData.room2}</h5>
            <img src={Floor} alt={floorData.room3} />
            <h5>{floorData.room3}</h5>
          </div>
          <div>
            <Button variant="contained">Select all</Button>
            <Button variant="contained" className="yellowBtn">
              Dowload
            </Button>
          </div>
        </div>
      ))}
    </section>
  );
}
