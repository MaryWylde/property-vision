import React from "react";
import StickyMenu from "../../components/stickyMenu/stickyMenu";
import PropertyWebsite from "../../sections/websiteInfo/propertyWebsite";
import Gallery from "../../sections/gallery/gallery";
import Video from "../../sections/video/video";
import VideoInfo from "../../sections/videoInfo/videoInfo";
import FloorPlan from "../../sections/floorPlan/floorPlan";
import Footer from "../../components/footer/footer";
import "../mainContent/content.styles.scss";

import Faq from "../../sections/faq/faq";
const Content = () => (
  <div>
    <div>
      <div className="allContent">
        <div className="sticky">
          <StickyMenu />
        </div>
        <div className="main">
          <div>
            <PropertyWebsite />
          </div>
          <div>
            <Gallery />
          </div>
          <div>
            <Video />
          </div>
          <div>
            <VideoInfo />
          </div>

          <div>
            <FloorPlan />
          </div>

          <div>
            <Faq />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Content;
