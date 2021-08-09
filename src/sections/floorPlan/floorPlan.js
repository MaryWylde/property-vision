import React from "react";
import SelectBtn from "../../components/buttons/selectorBtn";
import DownloadBtn from "../../components/buttons/downloaderBtn";
import "../floorPlan/floorPlan.styles.scss";
import Floor from "../../assets/floorImg.svg";

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

const FloorPlan = () => (
  <section id="floorPlan">
    <div>
      <h1 className="title">Floor plan</h1>
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
          <div className="floor">
            <img src={Floor} alt={floorData.rooms} />
            <h5>{floorData.rooms}</h5>
          </div>
          <div>
            <img src={Floor} alt={floorData.rooms} />
            <h5>{floorData.room1}</h5>
          </div>

          <div>
            <img src={Floor} alt={floorData.rooms} />
            <h5>{floorData.room2}</h5>
          </div>

          <div>
            <img src={Floor} alt={floorData.rooms} />
            <h5>{floorData.room3}</h5>
          </div>
        </div>
        <div className="buttons">
          <div className="first">
            <SelectBtn />
          </div>

          <DownloadBtn />
        </div>
      </div>
    ))}
  </section>
);

export default FloorPlan;
