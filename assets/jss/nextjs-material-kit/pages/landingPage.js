import { container, title } from "assets/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none",
  },
  titleDark: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "black",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
    color: "black",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    "@media (min-width: 576px)": {
      margin: "-20px 5px 5px",
    },
    "@media (min-width: 768px)": {
      margin: "-20px 10px 10px",
    },
    "@media (min-width: 992px)": {
      margin: "-20px 20px 20px",
    },
    "@media (min-width: 1200px)": {
      margin: "-20px 30px 0px",
    },

    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  section: {
    textAlign: "center",
  },
  paragraph: {
    color: "grey",
    marginTop: 30,
  },
};

export default landingPageStyle;
