import { useEffect } from 'react';
import axios from 'axios';

const useAPI = (url, token, setter) => {
  useEffect(() => {
    if (token) {
      const asyncCallBack = async () => {
        axios.get(url, { headers: {
          Authorization: token,
        },
        }).then(({ data }) => setter(data.result))
          .catch(({ response }) => console.log(response));
      };

      asyncCallBack();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
};

export default useAPI;
