const express = require('express');
const caterersRouter = express.Router();
const axios = require('axios');

require('dotenv').config();

const userSearch = (userSearchInput, type) => {
  if (type === 'all') {
    const { location, term, price } = userSearchInput;
    return `{
    search(term: "restaurant ${term}", location: "${location}", price: "${price}", categories: "catering", attributes: "Offers Catering", limit: 50) {
      total
      business {
        id
        rating
        name
        phone
        price
        photos
        is_claimed
        url
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
  }`;
  } else {
    return `{
    business(id: "${userSearchInput}") {
        name
        id
      alias
      phone
      price
      photos
      url     
      rating
      hours {
        open {
          is_overnight
          end
          start
          day
        }
      }
      categories {
        title
        alias
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
 
    }
  }`;
  }
};

const TOKEN = process.env.YELP_TOKEN

const getCaterers = async (userSearchInput, queryType) => {
  const options = {
    method: 'POST',
    url: 'https://api.yelp.com/v3/graphql',
    headers: {
      'content-type': 'application/graphql',
      Authorization: `Bearer ${TOKEN}`,
    },
    data: userSearch(userSearchInput, queryType),
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

caterersRouter.post('/', async (req, res, next) => {
  try {
    const queryType = 'all';
    const userSearchInput = req.body;

    const data = await getCaterers(userSearchInput, queryType);
    if (data.errors) {
      res.send(data.errors[0].message).status(404);
    } else {
      res.send(data).status(200);
    }
  } catch (error) {
    next(error);
  }
});

caterersRouter.post('/:id', async (req, res, next) => {
  try {
    const queryType = 'single';
    const yelpId = req.body.id;
    const data = await getCaterers(yelpId, queryType);
    res.send(data).status(200);
  } catch (error) {
    next(error);
  }
});

module.exports = { caterersRouter };
