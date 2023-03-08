import { useEffect, useState } from 'react';

const useLocalStorage = (key, value) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const asyncCallBack = async () => {
      if (value) {
        const userAlreadyExists = await JSON.parse(localStorage.getItem(key));

        if (!userAlreadyExists) {
          localStorage.setItem(key, JSON.stringify(value));
        }
      } else {
        setUser(await JSON.parse(localStorage.getItem(key)));
      }
    };

    asyncCallBack();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return user || `Value saved in local storage in key: ${key}`;
};

export default useLocalStorage;
