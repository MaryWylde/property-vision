import React from "react";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import "../footer/footer.styles.scss";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import Logo from "../../assets/logo.svg";
import PhoneIcon from "@material-ui/icons/Phone";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import Button from "@material-ui/core/Button";

export default function Footer() {
  return (
    <footer>
      <Box bgcolor="text-secondary" color="black">
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={3}>
              <Box>
                <img src={Logo} alt="logo" />
              </Box>

              <Box>
                <p>
                  Our mission is to produce stunning visual content for today's
                  Real Estate Marketing environment. We are passionate about
                  helping our clients grow and reach new heights in Real Estate
                  business.
                </p>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box>Roadmap</Box>
              <Box>
                <Link> Sign in / Sign up </Link>
              </Box>
              <Box>
                <Link> Pricing </Link>
              </Box>

              <Box>
                <Link> Order a tour </Link>
              </Box>
              <Box>
                <Link>Blog</Link>
              </Box>
              <Box>
                <Link>FAQ</Link>
              </Box>
            </Grid>
            <Grid item xs={4} sm={2}>
              <Box>Services</Box>
              <Box>
                <Link> Cinematic real estate video</Link>
              </Box>
              <Box>
                <Link> 3D MAtterport tour</Link>
              </Box>

              <Box>
                <Link> Still photography(HDR)</Link>
              </Box>
              <Box>
                <Link> Agent video presenntation</Link>
              </Box>
              <Box>
                <Link> Drone(Transport Canada licenced)</Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <Box >Social media content production</Box> */}
              <Box>
                <Link>Social media content production</Link>
              </Box>
              <Box></Box>
              <Box>
                <Link> Floors plan</Link>
              </Box>
              <Box>
                <Link> Twilight photography</Link>
              </Box>

              <Box>
                <Link> Single property website </Link>
              </Box>
              <Box>
                <Link>Virtual slideshow tours </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={2}>
              <Box>Contact info</Box>
              <Box>
                <Link>
                  <Button startIcon={<PhoneIcon />}>
                    <a href="tel:9057669009" className="phone">
                      (905) 766 9009
                    </a>
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link>
                  <Button startIcon={<QueryBuilderIcon />}>
                    <p> 10:00 Am - 18:00 pm </p>
                  </Button>
                </Link>
              </Box>

              <Box>
                <Link>
                  <Button startIcon={<MailOutlineIcon />}>
                    <a> info@propertyvision.ca</a>
                  </Button>
                </Link>
              </Box>
              <Box>
                <Link>
                  <i className="fb"> {<FacebookIcon />} </i>
                  <i className="insta"> {<InstagramIcon />}</i>
                  <i className="linkedIn">{<LinkedInIcon />}</i>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </footer>
  );
}
