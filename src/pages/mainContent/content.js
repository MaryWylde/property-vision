import React from "react";
import StickyMenu from "../../components/stickyMenu/stickyMenu";
import "../mainContent/content.styles.scss";
import PropertyWebsite from "../../sections/websiteInfo/propertyWebsite";
import Gallery from "../../sections/gallery/gallery";
import VideoPage from "../../sections/videoPage/videoPage";
import VideoInfo from "../../sections/videoInfo/videoInfo";
import FloorPlan from "../../sections/floorPlan/floorPlan";
import Footer from "../../components/footer/footer";

import Faq from "../../sections/faq/faq";
export default function Content() {
  return (
    <div>
      <div>
        <div className="allContent">
          <div className="sticky">
            <StickyMenu />
          </div>
          <div className="main">
            <PropertyWebsite />
            <Gallery />
            <VideoPage />
            <VideoInfo />
            <FloorPlan />
            <Faq />
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
