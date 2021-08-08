import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@material-ui/icons/Add";
import Grid from "@material-ui/core/Grid";
import "../faq/faq.styles.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function NestedGrid() {
  const classes = useStyles();

  function FormRow() {
    return (
      <React.Fragment>
        <Grid item xs={5}>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Lorem ipsum frequently asked question?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={5}>
          <Accordion>
            <AccordionSummary
              expandIcon={<AddIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>
                Lorem ipsum frequently asked question?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <div className="faq">
      <div className="faqTitle">
        <h1>Frequently asked questions</h1>
        <p>Need answers? Find them here.</p>
      </div>
      <div className="mainQuestions">
        <div className={classes.root}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={2}>
              <FormRow />
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <FormRow />
            </Grid>
            <Grid container item xs={12} spacing={2}>
              <FormRow />
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
