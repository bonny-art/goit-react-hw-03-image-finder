import axios from 'axios';

const API_KEY = '40358053-aa77a52d7b78d629a29aff12d';
export const PER_PAGE = 12;
axios.defaults.baseURL = 'https://pixabay.com/api/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
axios.defaults.params = {
  orientation: 'horizontal',
  per_page: PER_PAGE,
  image_type: 'photo',
  key: API_KEY,
};

export const getImages = async (query, page) => {
  try {
    const resp = await axios.get(`?q=${query}&page=${page}`);
    return resp.data;
  } catch (err) {
    throw new Error(`Something went wrong: ${err.message}`);
  }
};
