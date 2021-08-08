import React from "react";
import "./navbarDown.styles.scss";
import Logo from "../../assets/logo2.svg";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import Button from "@material-ui/core/Button";
export default function NavBar() {
  return (
    <Typography className="nav2">
      <Link href="#">
        <img src={Logo} alt="logo" />
      </Link>
      <ul className="menu">
        <li>
          <Link href="#" color="inherit">
            Pricing
          </Link>
        </li>
        <li>
          <Link href="#" color="inherit">
            Order a tour
          </Link>
        </li>
        <li>
          <Link href="#" color="inherit">
            Services
          </Link>
        </li>
      </ul>
      <ul className="info">
        <Button startIcon={<PhoneIcon />}>
          <a href="tel:9057669009" className="phone2">
            (905) 766 9009
          </a>
        </Button>

        <Button variant="contained" className="yellowBtn">
          Sign In / Sign Up
        </Button>
      </ul>
    </Typography>
  );
}
