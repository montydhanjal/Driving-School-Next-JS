var aws = require("aws-sdk");
var ses = new aws.SES({ region: "us-west-2" });

exports.handler = async function (event) {
  var body;
  if (event.body !== null && event.body !== undefined) {
    body = JSON.parse(event.body);
  }
  var params = {
    Destination: {
      ToAddresses: ["missionvalleydriving@gmail.com"],
    },
    Message: {
      Body: {
        Text: { Data: body.msg },
      },
      Subject: {
        Data: `MV Driving School: Message from ${body.firstName} ${body.lastName}, From: ${body.email}`,
      },
    },
    Source: "montydhanjal@gmail.com",
  };

  var data;

  try {
    data = await ses.sendEmail(params).promise();
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "*",
      },
      body: JSON.stringify(body),
    };
  } catch (err) {
    return {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
        "Access-Control-Allow-Methods": "*",
      },
      body: JSON.stringify({ success: false, reason: err.message }),
    };
  }
};
