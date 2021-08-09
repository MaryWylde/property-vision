import React from "react";
import "../buttons/buttons.styles.scss";
import Button from "@material-ui/core/Button";
import Url from "../../assets/url.svg";

const UrlBtn = () => (
  <Button className="url" variant="contained" align-items="left">
    <img src={Url} className="copyUrl" alt="url" />
    www.apple.co/2NXuyWe
  </Button>
);

export default UrlBtn;
