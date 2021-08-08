import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "../buttons/buttons.styles.scss";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  MuiFilledInput: {
    height: "40px",
  },
}));

export default function DownloadBtn() {
  const classes = useStyles();
  const [download, setDownload] = React.useState("");

  const handleChange = (event) => {
    setDownload(event.target.value);
  };

  return (
    <FormControl variant="filled" className={classes.formControl}>
      <InputLabel id="demo-simple-select-filled-label">DOWNLOAD</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        onChange={handleChange}
      >
        <MenuItem value="">
          <p>DOWNLOAD </p>
        </MenuItem>
        <MenuItem value={10}>DOWNLOAD MLS WEB</MenuItem>
        <MenuItem value={20}>DOWNLOAD FOR PRINT</MenuItem>
        <MenuItem value={30}>DOWNLOAD BOTH</MenuItem>
      </Select>
    </FormControl>
  );
}
