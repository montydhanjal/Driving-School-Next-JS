import { title, container } from "assets/jss/nextjs-material-kit.js";

const productStyle = {
  container: {
    zIndex: "12",
    // color: "#FFFFFF",
    ...container,
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  title: {
    ...title,
    marginBottom: "1rem",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  description: {
    color: "#999",
  },
  dangerText: {
    color: "red",
    margin: "5px",
  },
  paragraph: {
    color: "grey",
    marginTop: 30,
  },
};

export default productStyle;
