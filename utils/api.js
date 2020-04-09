require('dotenv').config();
const axios = require("axios");


const api = {
  getUser(username) {
    axios
      .get(`https://api.github.com/users/${username}`,
        {
          headers: { "Authorization": `token ${process.env.APIKEY}` }
        }
      )
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
  },
};

api.getUser("nmonsivais");

module.exports = api;
