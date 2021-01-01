/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks() {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Components"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={classes.dropdownLink}>All components</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={classes.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link href="/index" passHref>
          <Button color="transparent" className={classes.navLink}>
            Home
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/prices" passHref>
          <Button color="transparent" className={classes.navLink}>
            Our Prices
          </Button>
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link href="/index" passHref>
          <Button color="transparent" className={classes.navLink}>
            Teens
          </Button>
        </Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Link href="/index" passHref>
          <Button color="transparent" className={classes.navLink}>
            Resources
          </Button>
        </Link>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link href="/aboutus" passHref>
          <Button color="transparent" className={classes.navLink}>
            About Us
          </Button>
        </Link>
      </ListItem>
    </List>
  );
}
