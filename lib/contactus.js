import { API } from "aws-amplify";

export const sendEmail = (values) => {
  const apiName = "mvdrivingApi";
  const path = "/api/contactus";
  const myInit = {
    // OPTIONAL
    body: values, // replace this with attributes you need
    headers: {}, // OPTIONAL
  };

  return API.post(apiName, path, myInit);
};

// postData();
