const axios = require("axios");
const API_URL = "http://172.20.10.9:8080/api/auth/local/register";
const API_TOKEN = "Bearer 0d21de5420e7cc86b74bbab95fc66f58783c9565b1061568b5690010e39dc7af1cb851cc57f96b0783b620789474a2615793de4833db62706197a35012986025cb728c3cf8cc93ef7bc42ae1a3ad537adbb30f5ec3e9482acbc0db46f4e5ded23a884012dbf56aec66c4c3a237575a61d7ecbcebb4aabe5076ff97f7b00e7fc2";
const payload = {
    username : "wongwarun",
    email: "s6602041510050@email.kmutnb.ac.th",
    password: "Neapza123",


};
axios
  .post(API_URL, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: API_TOKEN,
    },
  })
  .then((response) => {
    console.log("Send API OK", response.data);
  })
  .catch((err) => {
    console.log("Send API NOT OK ", err.message);
  });
