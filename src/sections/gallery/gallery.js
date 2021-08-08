import React from "react";
import Room from "../../assets/room.png";
import Button from "@material-ui/core/Button";
import "../gallery/gallery.styles.scss";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Checkbox from "@material-ui/core/Checkbox";
import DownloadBtn from "../../components/buttons/downloaderBtn";
export default function Gallery() {
  return (
    <div className="imgGallery" id="gallery">
      <div id="galleryInfo">
        <h1>Gallery</h1>
        <p>Quantity: 163 • Size: 1.39GB </p>
        <Button variant="contained" disabled className="udpate">
          Updated: 8/06/2021
        </Button>
      </div>

      <div className="galleryItems">
        <Zoom>
          <Checkbox
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <img src={Room} alt="room" className="room" />
        </Zoom>
        <Zoom>
          <Checkbox
            // className="selected"
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <img src={Room} alt="room" className="room" />
        </Zoom>
        <Zoom>
          <Checkbox
            // className="selected"
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <img src={Room} alt="room" className="room" />
        </Zoom>
        <Zoom>
          <Checkbox
            // className="selected"
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <img src={Room} alt="room" className="room" />
        </Zoom>
        <Zoom>
          <Checkbox
            // className="selected"
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <img src={Room} alt="room" className="room" />
        </Zoom>
        <Zoom>
          <Checkbox
            // className="selected"
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <img src={Room} alt="room" className="room" />
        </Zoom>
        <Zoom>
          <Checkbox
            // className="selected"
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <img src={Room} alt="room" className="room" />
        </Zoom>
        <Zoom>
          <Checkbox
            // className="selected"
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <img src={Room} alt="room" className="room" />
        </Zoom>
      </div>
      <div className="btns">
        <Button variant="outlined" className="whiteBtn">
          Cancel Selection
        </Button>
        <Button variant="outlined" className="blackBtn">
          Select all
        </Button>
        <DownloadBtn />
        {/* <Button variant="outlined" className="yellowBtn">
          Download
        </Button> */}
      </div>
    </div>
  );
}
