const request = require("request");

const url =
  "http://api.weatherstack.com/current?access_key=d1ca1819475a9db64f73709c29c8701f&query=37.3422,-122.3456";

request({ url: url }, (error, response) => {
  const data = JSON.stringify(response.body);
  console.log(data);
});
