import React from "react";
import "../buttons/buttons.styles.scss";
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const CopyYellowBtn = () => (
  <Button startIcon={<FileCopyIcon />} variant="outlined" className="yellowBtn">
    Copy link
  </Button>
);

export default CopyYellowBtn;
