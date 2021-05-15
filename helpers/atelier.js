/* eslint-disable camelcase */
const axios = require('axios');
const config = require('../APIconfig');
const API_URL = 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
const products_URL = 'http://3.143.183.211';

const getProductsEndpoint = (endpoint, callback) => {
  console.log('ENDPOINT!!!', `${products_URL}/${endpoint}`);
  axios.get(`http://3.143.183.211/api/products`)
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      console.log('Err getting all products from Atelier', error);
    });
};

const getEndpoint = (endpoint, callback) => {
  axios.get(`${API_URL}/${endpoint}`, {
    headers: {
      Authorization: config.API_KEY
    }
  })
    .then(response => {
      callback(null, response.data);
    })
    .catch(error => {
      console.log('Err getting all products from Atelier', error);
    });
};

const postToEndpoint = (endpoint, body, callback) => {
  axios.post(`${API_URL}/${endpoint}`, body, {
    headers: {
      Authorization: config.API_KEY
    }
  })
    .then(response => {
      callback(null, response);
    })
    .catch(error => {
      console.log('Error posting to Atelier', error.message);
    });
};

const putToEndpoint = (endpoint, body, callback) => {
  axios.put(`${API_URL}/${endpoint}`, body, {
    headers: {
      Authorization: config.API_KEY
    }
  })
    .then(response => {
      callback(null, response);
    })
    .catch(error => {
      console.log('Error updating Atelier', error);
    });
};

module.exports = {
  getProductsEndpoint,
  getEndpoint: getEndpoint,
  postToEndpoint: postToEndpoint,
  putToEndpoint: putToEndpoint
};
