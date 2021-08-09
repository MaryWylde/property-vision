import React from "react";
import "./navbar.styles.scss";
import SignInBtn from "../buttons/signInBtn";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/cart.svg";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import Button from "@material-ui/core/Button";

const NavBar = () => (
  <Typography className="nav">
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
        <a href="tel:9057669009" className="phone">
          (905) 766 9009
        </a>
      </Button>
      <Button>
        <a href="cart" className="cart">
          <img src={Cart} alt="cart" />
          Cart 0
        </a>
      </Button>
      <SignInBtn />
    </ul>
  </Typography>
);

export default NavBar;
