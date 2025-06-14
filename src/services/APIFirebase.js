import axios from 'axios';

const firebaseConfig = {
  apiKey: 'AIzaSyAuUxEVx9ifzEZ1Jbx44-H8Q8XxeKTvGOw',
  authDomain: 'special-cable-62180.firebaseapp.com',
  databaseURL: 'https://special-cable-62180-default-rtdb.firebaseio.com',
  projectId: 'special-cable-62180',
  storageBucket: 'special-cable-62180.firebasestorage.app',
  messagingSenderId: '95105860300',
  appId: '1:95105860300:web:976f044ca886476d4d7869',
  measurementId: 'G-FE1JDR1PBL',
};

const databaseURL = firebaseConfig.databaseURL;

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
