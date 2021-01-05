import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Header from "components/Header/Header.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/teenPageStyle.js";

// Sections for this page

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
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
        image={require("assets/img/driving/teen.jpg")}
      >
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}></GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <div className={classNames(classes.section)}> */}
          {/* <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}> */}
          <h3 className={classes.title}>
            How to apply for a pro­vi­sional per­mit if you are under 18
          </h3>
          To apply for a pro­vi­sional per­mit, you will need the following:
          <ul>
            <li>Be at least 15 ½, but under 18 years of age. </li>
            <li>
              Visit a DMV office (make an Appointment(s) for faster service)
            </li>
            <li>
              Com­plete the appli­ca­tion form DL 44 (An orig­i­nal DL 44 form
              must be sub­mit­ted. Copies obtained by xerox­ing, fax­ing, or
              other meth­ods will not be accepted.)
            </li>
            <li>
              Have your par­ents’ or guardians’ sig­na­tures on the
              appli­ca­tion form DL 44
            </li>
            <li>Give a thumb print</li>
            <li>Have your pic­ture taken</li>
            <li>
              Pro­vide your social secu­rity num­ber. It will be ver­i­fied with
              the Social Secu­rity Admin­is­tra­tion while you are in the
              office.
            </li>
            <li>Ver­ify your birth date and legal presence</li>
            <li>
              “Pro­vide your true full name if your name no longer matches the
              name on your birth date legal pres­ence document.”
            </li>
            <li>
              Sub­mit the proper form(s) for dri­ver edu­ca­tion and/​or dri­ver
              train­ing classes (See below for details.)
            </li>
            <li>
              Pay the appli­ca­tion fee (This fee enti­tles you to three exams
              of any type within the 12 – month period and pays for both the
              instruc­tion per­mit and the dri­ver license. If all require­ments
              are not met within the 12 – month period, the appli­ca­tion
              becomes void and all steps must be com­pleted again.)
            </li>
            <li>Pass a vision exam</li>
            <li>
              Pass a traf­fic laws and sign test. There are 46 ques­tions on the
              test. A pass­ing score is at least 39 cor­rect answers. You have
              three chances to pass the test. If you fail, you must wait 7 days
              before tak­ing it again.
            </li>
          </ul>
          <h4>
            Note: To allow you suf­fi­cient time for test­ing DMV will not be
            admin­is­ter­ing writ­ten or audio exams after 4:30 p.m.
          </h4>
          <br />
          <h4>Dri­ver Edu­ca­tion and Dri­ver Train­ing Form Requirements</h4>
          <h5>
            If you are 15 ½ to 17 ½ years of age, you will need to pro­vide a
            Cer­tifi­cate of Com­ple­tion of Dri­ver Education.
          </h5>
          <h3>OR</h3>
          <h5>
            Cer­tifi­cate of Com­ple­tion of Dri­ver Edu­ca­tion and Dri­ver
            Training.
          </h5>
          <h3>OR</h3>
          <h5>
            Cer­tifi­cate of Enroll­ment In An Inte­grated (Class­room) Dri­ver
            Edu­ca­tion And Dri­ver Train­ing Program.
          </h5>
          <h4>
            {" "}
            If you are over 17 ½ but under 18 years of age, you may get your
            per­mit with­out the dri­ver edu­ca­tion and dri­ver train­ing
            cer­tifi­cates how­ever, you will not be able to take the dri­ving
            test until you turn 18.
          </h4>
          <h5>
            Once you pass your writ­ten test, you will be issued a pro­vi­sional
            permit.
          </h5>
          <h5>
            A par­ent, guardian, spouse or adult 25 years of age or older, who
            has a valid Cal­i­for­nia dri­ver license, must be with you when you
            drive. He or she must sit in a posi­tion close enough to take
            con­trol of the vehi­cle, if nec­es­sary. It is ille­gal for you to
            drive alone at any time.
          </h5>
          <h4>Before being eli­gi­ble to take your dri­ving test you must:</h4>
          <h5>Be 16 years old</h5>
          <h3>AND</h3>
          <h5>Have held your per­mit for a min­i­mum of six months</h5>
          <h3>AND</h3>
          <h5>Have com­pleted dri­ver education</h5>
          <h3>AND</h3>
          <h5>Have com­pleted 6 hours of pro­fes­sional dri­ver training</h5>
          <h3>AND</h3>
          <h5>
            Have com­pleted 50 hours of prac­tice with an adult 25 years or
            older. The adult must have a valid Cal­i­for­nia dri­ver license and
            cer­tify to the 50 hours of prac­tice. At least 10 of the 50 hours
            must have been done at night.
          </h5>
          {/* <h2 className={classes.titleDark}>Our Policies</h2> */}
          {/* </GridItem>
            </GridContainer> */}
          {/* </div> */}
          {/* <Aboutus />
          <WorkSection /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
