import React from "react";
import Video from "../../assets/vidImg.svg";
import "../videoInfo/videoInfo.styles.scss";
import Button from "@material-ui/core/Button";
const overView = [
  {
    id: 1,
    img: "",
    size: "1.3 GB",
    name: "Instagram video",
    description:
      "We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible value proposition to your listings marketing. 2 days Turnaround Beautiful Ultra-Realistic Interiors Design that compliments your space We can work with both Empty and Furnished spaces",
  },
  {
    id: 2,
    img: "../../assets/instaOverView.svg",
    size: "852 MB",
    name: "Editable Heading",
    description: "Editable Description Lorem Ipsum...",
  },
];

export default function VideoInfo() {
  return (
    <section id="vidInfo">
      {/* <h1>Video / 3d matterpoint</h1> */}
      <div className="vidOpt">
        {overView.map((info) => (
          <div key={info.id} className="vidType">
            <div className="imgOfVid">
              <img src={Video} alt="video" />
            </div>
            {/* <img src={instaOverView} /> */}
            <div className="context">
              <h1>{info.name}</h1>
              <a> Size {info.size}</a>
              <h1>{info.title}</h1>
              <p> {info.description} </p>
              <a> Learn more </a>
            </div>
            <div className="vidBtn">
              <Button variant="contained" className="yellowBtn">
                Download Video
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
