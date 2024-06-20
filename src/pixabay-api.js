import axios from 'axios';

export const BASE_URL = 'https://pixabay.com/api/';
// change key to your api key
const API_KEY = "42899490-861e6514c70e56b69d35e2ae0";

export const getAPI = async (query, page) => {
  const url = `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  const response = await axios.get(url);

  return response.data;
};