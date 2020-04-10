// require('dotenv').config();
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

// api.getUser("nmonsivais");

//This object (api) is open to other files by doing module.exports
module.exports = api;
