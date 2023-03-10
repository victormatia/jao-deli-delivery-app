import axios from 'axios';

const fetchAPI = async (url, token, setter) => {
  axios.get(url, { headers: {
    Authorization: token,
  },
  }).then(({ data }) => setter(data.result))
    .catch(({ response }) => console.log(response));
};

export default fetchAPI;
