import PropTypes from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
import useAPI from '../hooks/useAPI';
import useLocalStorage from '../hooks/useLocalStorage';
// import formatPrice from '../utils/formatPrice';

const productsContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const { token } = useLocalStorage('user');

  useAPI('http://localhost:3001/customer/products', token, setProducts);

  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || [];
    if (cartFromLocalStorage.length) setCart(cartFromLocalStorage);
  }, []);

  useEffect(() => {
    const currAmount = cart.reduce((acc, curr) => acc + (curr.price * curr.quantity), 0);

    setAmount(currAmount);

    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const state = useMemo(() => ({
    products,
    setProducts,
    cart,
    setCart,
    amount,
  }), [products, cart, amount]);

  return (
    <productsContext.Provider value={ state }>
      {children}
    </productsContext.Provider>
  );
}

ProductsProvider.propTypes = {
  children: PropTypes.shape,
}.isRequired;

export default ProductsProvider;
export { productsContext };
