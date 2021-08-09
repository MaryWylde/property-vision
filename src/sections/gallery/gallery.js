import React from "react";
import Zoom from "react-medium-image-zoom";
import DownloadBtn from "../../components/buttons/downloaderBtn";
import "../gallery/gallery.styles.scss";
import Button from "@material-ui/core/Button";
import Room from "../../assets/room.png";
import "react-medium-image-zoom/dist/styles.css";
import Checkbox from "@material-ui/core/Checkbox";

const Images = [
  {
    photo: [Room],
    name: "room",
  },
  {
    photo: [Room],
    name: "room",
  },
  {
    photo: [Room],
    name: "room",
  },
  {
    photo: [Room],
    name: "room",
  },
  {
    photo: [Room],
    name: "room",
  },
  {
    photo: [Room],
    name: "room",
  },
  {
    photo: [Room],
    name: "room",
  },
  {
    photo: [Room],
    name: "room",
  },
];

const Gallery = () => (
  <div className="imgGallery" id="gallery">
    <div id="galleryInfo">
      <h1>Gallery</h1>
      <p>Quantity: 163 • Size: 1.39GB </p>
      <Button variant="contained" disabled className="udpate">
        Updated: 8/06/2021
      </Button>
    </div>
    <div className="galleryItems">
      {Images.map((images, index) => (
        <Zoom>
          <Checkbox
            defaultChecked
            color="default"
            inputProps={{ "aria-label": "checkbox with default color" }}
          />
          <img src={images.photo} alt="room" className="room" />
        </Zoom>
      ))}
    </div>
    <div className="btns">
      <Button variant="outlined" className="whiteBtn">
        Cancel Selection
      </Button>
      <Button variant="outlined" className="blackBtn">
        Select all
      </Button>
      <DownloadBtn />
    </div>
  </div>
);

export default Gallery;
