import React, { useState } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { useFormik } from "formik";
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

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

const validationSchema = Yup.object({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  msg: Yup.string().required("Last Name is required"),
  email: Yup.string().email().required("First Name is required"),
});

export default function WorkSection() {
  const [error, isError] = useState(false);
  const [success, isSucess] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      msg: "",
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

  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>
            To Register Call or Text @ 4084778206
          </h2>
          <h4 className={classes.description}>
            Fill the form below to get in contact with us
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
          <GridItem xs={12} sm={12} md={4}>
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
          <GridItem xs={12} sm={12} md={4}>
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
          <GridItem xs={12} sm={12} md={4}>
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

          <GridItem xs={12} sm={12} md={4} className={classes.textCenter}>
            <Button
              disabled={formik.isSubmitting}
              type="submit"
              color="primary"
            >
              Send Message
            </Button>
            <Button onClick={formik.resetForm} color="secondary">
              Reset
            </Button>
          </GridItem>
        </GridContainer>
      </form>
    </div>
  );
}
