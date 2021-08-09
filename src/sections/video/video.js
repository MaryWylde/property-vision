import React from "react";
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import CodeIcon from "@material-ui/icons/Code";
import "../video/video.styles.scss";
import Video from "../../assets/vidImg.svg";

const data = [
  {
    id: 1,
    size: "1.3GB",
    title: "Branded video",
    description:
      "We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible value proposition to your listings marketing. 2 days Turnaround Beautiful Ultra-Realistic....",
    btnType: "Download video",
  },
  {
    id: 2,
    size: "852 MB",
    title: "Unbranded Video",
    description:
      "We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible value proposition to your listings marketing. 2 days Turnaround Beautiful Ultra-Realistic....",
    btnType: "Download video",
  },
  {
    id: 3,
    size: "852 MB",
    title: "Explore 3D Area",
    description:
      "We are very excited to offer our VIRTUAL STAGING service To help our clients adapt to the fast-changing environment of today’s Real Estate Market and bring the best possible value proposition to your listings marketing. 2 days Turnaround Beautiful Ultra-Realistic....",
    btnType2: "Copy Link",
    btnType3: "Embed code",
  },
];

const VideoPage = () => (
  <section id="videoSection">
    <div>
      <h1 className="title">Video / 3d matterpoint</h1>
      <Button variant="contained" disabled className="udpate">
        Updated: 8/06/2021
      </Button>
    </div>
    <div className="videoOptions">
      {data.map((info) => (
        <div key={info.id} className="opt">
          <div className="options">
            <img src={Video} alt="vid" id="vidImg" />
            <p> {info.size}</p>
            <h1 className="title"> {info.title}</h1>
            <p id="description"> {info.description} </p>
            <a>Learn more</a>
            <br />
            <div>
              <Button variant="contained" className="yellowBtn download">
                {info.btnType}
              </Button>
            </div>
            <div className="twoBtn">
              <div className="btn">
                <Button
                  startIcon={<FileCopyIcon />}
                  variant="contained"
                  className="yellowBtn cancel"
                >
                  {info.btnType2}
                </Button>
              </div>
              <div>
                <Button
                  variant="contained"
                  startIcon={<CodeIcon />}
                  className="yellowBtn embed"
                >
                  {info.btnType3}
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default VideoPage;
