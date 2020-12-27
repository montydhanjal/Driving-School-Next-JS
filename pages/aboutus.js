import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

// Sections for this page
import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import Aboutus from "../pages-sections/driving-sections/Aboutus";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function aboutus(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        brand="MV Driving School"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 150,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        filter
        small
        responsive
        image={require("assets/img/driving/aboutus.jpg")}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                We have equipped our car’s with 2 Brakes, and 2 Gas Pedal. You
                will also find that our dri­ving instruc­tors are very skilled ,
                pro­fes­sional, patient and friendly.
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <div className={classNames(classes.section)}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h4 className={classes.paragraph}>
                  MV Dri­ving is one of the best and safest dri­ving school
                  ser­vice thriv­ing in the Cal­i­for­nia area. We pro­vide
                  inten­sive dri­ving lessons to prop­erly equip you before
                  hit­ting the road. Our experts strive to pro­vide the best
                  pro­fes­sional ser­vice, includ­ing crash course dri­ving
                  lessons, which focus on dri­ving instruc­tions and mas­tery of
                  road rules. With these, we assure cus­tomer sat­is­fac­tion at
                  very afford­able rates. You’ll find that our dri­ving
                  instruc­tors are very skilled, pro­fes­sional, patient and
                  friendly. MV Driving’s pro­fes­sional staff will kindly
                  pro­vide you with all the nec­es­sary infor­ma­tion that you
                  will need to help you obtain your driver’s license, reme­dial
                  lessons, spe­cial drive test requests, or answer other
                  ques­tions that you may have.
                </h4>
              </GridItem>
            </GridContainer>
          </div>

          <WorkSection />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
