import axios from 'axios';

const databaseURL = 'https://special-cable-62180-default-rtdb.firebaseio.com';

export const getProductList = async () => {
  const response = await axios.get(`${databaseURL}/products.json`);
  return response.data;
};

export const getProduct = async productId => {
  const response = await axios.get(`${databaseURL}/productDescription/${productId}.json`);
  return response.data;
};

export const getArticleList = async () => {
  const response = await axios.get(`${databaseURL}/articles.json`);
  return response.data;
};

export const getArticle = async projectId => {
  const response = await axios.get(`${databaseURL}/articles/${projectId}.json`);
  return response.data;
};
