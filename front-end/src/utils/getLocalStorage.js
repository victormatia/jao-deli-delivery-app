const getLocalStorage = async (key) => JSON.parse(localStorage.getItem(key));

export default getLocalStorage;
