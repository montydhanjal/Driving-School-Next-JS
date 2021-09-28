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
import Small from "components/Typography/Small.js";
import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";
import Danger from "components/Typography/Danger.js";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import StarIcon from "@material-ui/icons/Star";

// table styles
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(styles);

function createData(city, service, price, test) {
  return { city, service, price, test };
}

export default function Aboutus() {
  const classes = useStyles();

  const rows = [

    createData("Sacramento (Zip Code: Only 95828)", "$110", "$330", "$120"),
    createData("Elk Grove (Zip Code: all)", "$110", "$330", "$120"),

  ];

  return (
    <div className={classes.section}>
       <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <span style={{color: "red", fontWeight: 600}}> 
            MV Driving school will not be accepting students from Bay Area.
            <br />
            Existing students can call us on 408-477-0086 for any question
          </span>
       
        </GridItem>
     </GridContainer>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h4 className={classes.title}>
            Schedule Your Driving Lessons with Us!
          </h4>

          <h2 className={classes.title}>
            To Register Call or Text
            <br />
            @ <a href="tel:9168831585">916-883-1585</a>
            <br />
            <Small className={classes.description}>
              <span style={{ lineHeight: "120%" }}>
                Mon-​Fri: 9:00 AM-5:00 PM
                <br />
                Sat-​Sun: Closed
                <br />
                After hours only text 
              </span>
            </Small>
          </h2>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our Pricing</h2>

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>City</TableCell>
                  <TableCell align="right">2 Hours</TableCell>
                  <TableCell align="right">6 Hours</TableCell>
                  <TableCell align="right">
                    DMV Test <br></br> (South Sacramento DMV Only)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                      {row.city}
                    </TableCell>
                    <TableCell align="right">{row.service}</TableCell>
                    <TableCell align="right">{row.price}</TableCell>
                    <TableCell align="right">{row.test}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <Danger className={classes.dangerText}>
              - Dri­ving Test Only “For using our car at the DMV” (South Sacramento DMV)
              <br />
              *Only for the stu­dents who have enrolled in the dri­ving Classes.
            </Danger>
          </TableContainer>

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
