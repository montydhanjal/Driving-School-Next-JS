import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

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
// import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";

// custom packages
import TextLoop from "react-text-loop";
import Aboutus from "../pages-sections/driving-sections/Aboutus";

const dashboardRoutes = [];
const useStyles = makeStyles(styles);

const Index = (props) => {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        // brand="MV Driving School"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax
        filter
        responsive
        image={require("assets/img/driving/driving-tips-new-drivers.jpg")}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Welcome to MV Driving School</h1>
              <TextLoop>
                <h2 className={classes.title}>5 Star Yelp Ratings</h2>
                <h2 className={classes.title}>Patient Instructors</h2>
                <h2 className={classes.title}>15,000 Training hours</h2>
                <h2 className={classes.title}>Dual Braking System</h2>
                <h2 className={classes.title}>10+ years of expirence</h2>
              </TextLoop>
              <h4>
                MV Dri­ving is one of the best and safest dri­ving school
                ser­vice thriv­ing in the Cal­i­for­nia area. We pro­vide
                inten­sive dri­ving lessons to prop­erly equip you before
                hit­ting the road. Our experts strive to pro­vide the best
                pro­fes­sional ser­vice, includ­ing crash course dri­ving
                lessons, which focus on dri­ving instruc­tions and mas­tery of
                road rules.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="/prices"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Pricing
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Aboutus />
          {/* <TeamSection /> */}
          <WorkSection />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
