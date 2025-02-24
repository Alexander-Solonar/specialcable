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

export const getProductsList = async lng => {
  const response = await axios.get(`${databaseURL}/${lng}/products.json`);
  return response.data;
};
