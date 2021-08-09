import React from "react";
import "./propertyWebsite.styles.scss";
import Devices from "../../assets/devicesMashup.png";
import GoToWebBtn from "../../components/buttons/goToWebBtn";
import CopyBtn from "../../components/buttons/copyBtn";
import CopyYellowBtn from "../../components/buttons/copyYellowBtn";
import WatchTutorialBtn from "../../components/buttons/watchTutorialBtn";

const PropertyWebsite = () => (
  <div id="section1" className="section1">
    <div className=" flex-child first">
      <h1 id="firstTitle">Property website</h1>
      <img src={Devices} alt="devices" id="devices" />
    </div>
    <div className="flex-child webTypes">
      <div className="branded">
        <h1>Branded website</h1>
        <p>
          We are very excited to offer our VIRTUAL STAGING service To help our
          clients adapt to the fast-changing environment of today’s Real Estate
          Market and bring the best possible value.
        </p>
        <div className="firstBtns">
          <div id="copy">
            <CopyBtn />
          </div>

          <GoToWebBtn />
        </div>
      </div>
      <div className="unbranded">
        <h1>Unbranded website</h1>
        <p>
          We are very excited to offer our VIRTUAL STAGING service To help our
          clients adapt to the fast-changing environment of today’s Real Estate
          Market and bring the best possible value.
        </p>
        <div className="firstBtns">
          <div id="copy">
            <CopyBtn />
          </div>

          <GoToWebBtn />
        </div>
      </div>
      <div className="customURL">
        <h1>Custom URL</h1>
        <p>
          We are very excited to offer our VIRTUAL STAGING service To help our
          clients adapt to the fast-changing environment of today’s Real Estate
          Market and bring the best possible value.
        </p>
        <div className="firstBtns">
          <CopyYellowBtn />
        </div>
        <div className="customize">
          <h1>Customize website</h1>
          <p>
            We are very excited to offer our VIRTUAL STAGING service To help our
            clients adapt to the fast-changing environment of today’s Real
            Estate Market and bring the best possible value.
          </p>
          <div className="firstBtns">
            <div id="copy">
              <WatchTutorialBtn />
            </div>
            <GoToWebBtn />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default PropertyWebsite;
