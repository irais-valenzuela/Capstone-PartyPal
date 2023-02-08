const venuesRouter = require("express").Router();
const axios = require("axios");

require("dotenv").config();

const TOKEN = process.env.YELP_TOKEN;

const userSearch = (queryType, userSearchInput) => {
  const { service, location, price } = userSearchInput;
  console.log('price', userSearchInput)
  if (queryType === "all") {
    return `{
      search(term: "${service}", location: "${location}", categories: "venues", price: "${price}", limit: 50) {
        total
        business {
          id
          is_claimed
          alias
          name
          phone
          price
          photos
          url
          hours {
            open {
              is_overnight
              end
              start
              day
            }
          }
          reviews {
            id
            text
            rating
          }
          location {
            address1
            city
            state
            country
          }
          rating
        }
      }
    }
    `;
  } else {
    return `{
      business(id: "${userSearchInput}") {
        id
        alias
        name
        phone
        price
        photos
        url
        categories {
          title
          alias
        }
        hours {
          open {
            is_overnight
            end
            start
            day
          }
        }
        reviews {
          id
          text
          rating
        }
        location {
          address1
          city
          state
          country
        }
        rating
      }
    }
     `;
  }
};

const getVenues = async (queryType, userSearchInput) => {
  const options = {
    method: "POST",
    url: "https://api.yelp.com/v3/graphql",
    headers: {
      "content-type": "application/graphql",
      Authorization: `Bearer ${TOKEN}`,
    },
    data: userSearch(queryType, userSearchInput),
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

venuesRouter.post("/", async (req, res, next) => {
  try {
    const queryType = "all";
    const userSearchInput = req.body;
    const data = await getVenues(queryType, userSearchInput);
    if (data.errors) {
      res.send(data.errors[0].message).status(404);
    } else {
      res.send(data).status(200);
    }
  } catch (error) {
    next(error);
  }
});

venuesRouter.post("/:id", async (req, res, next) => {
  try {
    const yelpId = req.body.id;
    const queryType = "single";
    const data = await getVenues(queryType, yelpId);
    res.send(data).status(200);
  } catch (error) {
    next(error);
  }
});

module.exports = venuesRouter;
