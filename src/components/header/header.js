import React from "react";
import "./header.styles.scss";
import NavBar from "../navbar/navbar";
import NavBarDown from "../navbar/navbarDown";

import Download from "../../assets/download.svg";
import Matterport from "../../assets/matterport.svg";
import Floor from "../../assets/floor.svg";
import Video from "../../assets/video.svg";
export default function Header() {
  return (
    <header>
      <NavBar />

      <div className="downloadCenter">
        <div className="firstChild">
          <img src={Download} alt="icon" />
          <br />

          <h1> Download center</h1>
          <br />
          <h2> 8 Tarlton Rd, Toronto </h2>

          <h3>
            <span> Agent: </span> <span> Name Surname</span>
          </h3>
          <h3>
            <span> Date of shoot: </span> <span> 12/02/2021 </span>
          </h3>

          <div className="secondChild">
            <img src={Matterport} alt="matterport" />
            <img src={Video} alt="video" />
            <img src={Floor} alt="floor" />
          </div>
        </div>
      </div>
      <NavBarDown />
    </header>
  );
}
