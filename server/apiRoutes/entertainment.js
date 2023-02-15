const entertainmentRouter = require("express").Router();
const axios = require("axios");

const TOKEN = process.env.YELP_TOKEN;

const userSearch = (userSearchInput) => {
  const { location, service, categories } = userSearchInput;
  return `{
    search(term: "${service}", location: "${location}", categories: "${categories}", limit: 50) {
        total
        business {
          id
          name
          is_claimed
          photos
          location {
            address1
            city
            postal_code
            state
          }
          price
          rating
        }
    }
  }`;
};

const getRequestedEntertainment = async (userSearchInput) => {
  const options = {
    method: "POST",
    url: "https://api.yelp.com/v3/graphql",
    headers: {
      "content-type": "application/graphql",
      Authorization: `Bearer ${TOKEN}`,
    },
    data: userSearch(userSearchInput),
  };
  return axios
    .request(options)
    .then(function (response) {
      const res = response.data;
      return res;
    })

    .catch(function (error) {
      console.error(error);
    });
};

entertainmentRouter.post("/", async (req, res, next) => {
  try {
    const data = await getRequestedEntertainment(req.body);
    res.send(data).status(200);
  } catch (error) {
    next(error);
  }
});

module.exports = entertainmentRouter;
