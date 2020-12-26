import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import DriveEta from "@material-ui/icons/DriveEta";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import MonetizationOn from "@material-ui/icons/MonetizationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles(styles);

export default function Aboutus() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            Schedule Your Driving Lessons with Us!
          </h2>
          <h2 className={classes.description}>Call or Text @ 4084778206</h2>
          <h5 className={classes.description}>
            Mon-​Fri: 9:00 AM-5:00 PM Sat-​Sun: Closed After hours only text or
            email
          </h5>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Pricing</h2>
          <h3 className={classes.title}>
            Fre­mont, Union City and Newark: $95 ( 2 Hours)
          </h3>
          <h3 className={classes.title}>Mil­pi­tas: $95 ( 2 Hours )</h3>
          <h5 className={classes.description}>
            Mon-​Fri: 9:00 AM-5:00 PM Sat-​Sun: Closed After hours only text or
            email
          </h5>
          <List component="nav" className={classes.title} aria-label="contacts">
            <ListItem>
              <ListItemText primary="All our classes includes following services:" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText
                primary="Free pick-​up/​drop-​off from home, work, or school."
                secondary="Fremont, Union City, Newark and Milpitas only"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="2 Hrs with Pro­fes­sional Trainer" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="We have equipped our car’s with 2 Brakes, and 2 Gas Pedal." />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Behind-​The-​Wheel Training" />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Well trained instruc­tors, cer­ti­fied by DMV." />
            </ListItem>
          </List>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Professional Instructors"
              description="Our Instructors are Highly Trained in the latest Safety Techniques & Rules of the Road."
              icon={SupervisorAccount}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="DMV Licensed"
              description="All our Instructors are DMV Licensed, mentally and physically fit and have decade or more of Instruction History."
              icon={DriveEta}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Affordable Prices"
              description="We know this process can be expensive. So we constantly monitor our competitions pricing."
              icon={MonetizationOn}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
