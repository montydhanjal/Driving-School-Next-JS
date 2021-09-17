import React, { useState, useEffect, useRef } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { useFormik } from "formik";
import ReCAPTCHA from "react-google-recaptcha";
import "yup-phone";
// @material-ui/icons
import * as Yup from "yup";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { sendEmail } from "lib/contactus";
import Button from "components/CustomButtons/Button.js";
import { TextField } from "@material-ui/core";
import SnackbarContent from "components/Snackbar/SnackbarContent.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Recaptcha from "react-recaptcha";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  msg: Yup.string().required("Last Name is required"),
  email: Yup.string().email().required("First Name is required"),
  recaptcha: Yup.string().required("Recaptcha Required").nullable(),
  phone: Yup.string().required("Field is required").phone("US"),
});

export default function WorkSection() {
  const [error, isError] = useState(false);
  const [success, isSucess] = useState(false);
  const recaptaRef = useRef(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      msg: "",
      phone: "",
      recaptcha: "",
    },
    validationSchema,
    onSubmit: (values, actions) => {
      sendEmail(values)
        .then((x) => {
          isSucess(true);
          isError(false);
        })
        .catch((err) => {
          isSucess(false);
          isError(true);
        });

      setTimeout(() => {
        // you have to clean up
        actions.setSubmitting(false);
      }, 4000);
    },
  });

  function onChange(value) {
    console.log("Captcha value:", value);
  }

  // console.log(formik);
  const classes = useStyles();
  // console.log(recaptaRef);
  function reset() {
    if (recaptaRef.current) recaptaRef.current.reset();

    formik.resetForm();
  }
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            To Register Call or text
            <br />
            @ <a href="tel:9168831585">916-883-1585</a>
          </h2>
          <h4 className={classes.description}>
            Fill the form below for any inquiry
          </h4>
        </GridItem>
      </GridContainer>
      {error ? (
        <>
          {" "}
          <SnackbarContent
            message={
              <span>
                <b>Error:</b> Error submitting form, please contact us via our
                phone number.
              </span>
            }
            close
            color="danger"
            icon="info_outline"
          />
          <Clearfix />{" "}
        </>
      ) : null}
      {success ? (
        <>
          {" "}
          <SnackbarContent
            message={
              <span>
                <b>Submitted:</b> Message Sent
              </span>
            }
            close
            color="success"
            icon="info_outline"
          />
          <Clearfix />{" "}
        </>
      ) : null}
      <form onSubmit={formik.handleSubmit}>
        <GridContainer
          spacing="2"
          alignContent="center"
          alignItems="center"
          justify="center"
        >
          <GridItem xs={12} sm={6} md={3}>
            <TextField
              id="firstName"
              label="First Name"
              style={{ width: "100%" }}
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.firstName}
              error={formik.errors.firstName && formik.touched.firstName}
              helperText={
                formik.errors.firstName && formik.touched.firstName
                  ? formik.errors.firstName
                  : ""
              }
            />
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <TextField
              id="lastName"
              style={{ width: "100%" }}
              label="Last Name"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.lastName}
              error={formik.errors.lastName && formik.touched.lastName}
              helperText={
                formik.errors.lastName && formik.touched.lastName
                  ? formik.errors.lastName
                  : ""
              }
            />
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <TextField
              id="email"
              style={{ width: "100%" }}
              label="Email"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.email}
              error={formik.errors.email && formik.touched.email}
              helperText={
                formik.errors.email && formik.touched.email
                  ? formik.errors.email
                  : ""
              }
            />
          </GridItem>
          <GridItem xs={12} sm={6} md={3}>
            <TextField
              id="phone"
              style={{ width: "100%" }}
              label="Phone"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.phone}
              error={formik.errors.phone && formik.touched.phone}
              helperText={
                formik.errors.phone && formik.touched.phone
                  ? formik.errors.phone
                  : ""
              }
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={12}>
            <TextField
              style={{ width: "100%" }}
              id="msg"
              label="Message"
              variant="outlined"
              multiline
              rows={6}
              onChange={formik.handleChange}
              value={formik.values.msg}
              error={formik.errors.msg && formik.touched.msg}
              helperText={
                formik.errors.msg && formik.touched.msg ? formik.errors.msg : ""
              }
            />
          </GridItem>

          <GridItem xs={12} sm={12} md={12} className={classes.textCenter}>
            {formik.errors.recaptcha ? (
              <h5 style={{ color: "red" }}>{formik.errors.recaptcha}</h5>
            ) : null}
          </GridItem>

          <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
            <Button
              disabled={formik.isSubmitting}
              type="submit"
              color="primary"
            >
              Send Message
            </Button>
            {/* <Button onClick={reset} color="secondary">
              Reset
            </Button> */}
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={12}
            style={{ textAlign: "-webkit-center" }}
            className={classes.textCenter}
          >
            <Recaptcha
              sitekey="6LcygxwaAAAAAG2WtUIqXRQeg9l_waUJGJfmUZqa"
              render="explicit"
              ref={(e) => (recaptaRef.current = e)}
              style={{ textAlign: "center" }}
              theme="light"
              size="normal"
              badge="bottomright"
              verifyCallback={(response) => {
                formik.setFieldValue("recaptcha", response);
              }}
              onloadCallback={() => {
                console.log("done loading!");
              }}
            />
          </GridItem>
        </GridContainer>
      </form>
    </div>
  );
}
