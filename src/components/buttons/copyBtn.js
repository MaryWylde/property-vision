import React from "react";
import "../buttons/buttons.styles.scss";
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const CopyBtn = () => (
  <Button
    startIcon={<FileCopyIcon />}
    variant="outlined"
    className="blackBorderBtn"
  >
    Copy link
  </Button>
);

export default CopyBtn;
