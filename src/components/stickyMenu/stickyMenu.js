import React from "react";
import "../stickyMenu/stickyMenu.styles.scss";
import Globus from "../../assets/globus.svg";
import Gallery from "../../assets/gallery.svg";
import Matterport from "../../assets/3d.svg";
import VideoMenu from "../../assets/videoMenu.svg";
import FloorPlan from "../../assets/floorPlan.svg";
import Matterport3D from "../../assets/matterport2.svg";
import Video from "../../assets/video2.svg";
import Floor from "../../assets/floor2.svg";
import Button from "@material-ui/core/Button";
import ScheduleIcon from "@material-ui/icons/Schedule";

import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

const StickyMenu = () => (
  <div className="sidebar">
    <div>
      <Button variant="contained" disabled className="udpate">
        Updated: 9/06/2021
      </Button>
    </div>
    <div className="mainUpdate">
      <h3> 315 ST German Ave</h3>
      <h4>Toronto, on M5M 1W4</h4>
      <p>Agent: Name Surname</p>
      <p>Date of shoot:12/02/2021</p>
      <p>
        <span>
          <ScheduleIcon fontSize="small" />
        </span>
        Delivery date: 18/02/2021
      </p>
      <div className="items">
        <img src={Matterport3D} alt="matterport" />
        <img src={Video} alt="video" />
        <img src={Floor} alt="floor" />
      </div>
    </div>
    <div className="menu1">
      <div className="linksofTarget">
        <Link
          activeClass="active"
          to="section1"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={Globus} alt="img" className="website" />
        </Link>
      </div>
      <div className="linksofTarget">
        <Link
          activeClass="active"
          to="gallery"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={Gallery} alt="img" />
        </Link>
      </div>
      <div className="linksofTarget">
        <Link
          activeClass="active"
          to="videoSection"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={Matterport} alt="img" className="matterport" />
        </Link>
      </div>
      <div className="linksofTarget">
        <Link
          activeClass="active"
          to="vidInfo"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={VideoMenu} alt="img" />
        </Link>
      </div>
      <div className="linksofTarget">
        <Link
          activeClass="active"
          to="floorPlan"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={FloorPlan} alt="img" className="floorPlan" />
        </Link>
      </div>
    </div>
  </div>
);

export default StickyMenu;
