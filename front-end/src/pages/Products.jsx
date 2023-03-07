import { useEffect, useState } from 'react';
import CartButton from '../components/CartButton';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import useAPI from '../hooks/useAPI';
import useLocalStorage from '../hooks/useLocalStorage';

function Products() {
  // criar context para products/fluxo do cliente
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

  const updateCart = (title, price, quantity) => {
    const doesProductAlreayExists = cart.find((product) => product.title === title);
    const cartNoThisProduct = cart.filter((product) => product.title !== title);

    if (quantity === 0) {
      setCart(cartNoThisProduct);
    } else if (doesProductAlreayExists) {
      doesProductAlreayExists.quantity = quantity;
      setCart([...cartNoThisProduct, doesProductAlreayExists]);
    } else {
      setCart((prevCart) => [...prevCart, { title, price, quantity }]);
    }
  };

  return (
    <section>
      <NavBar />
      <h1>Produtos</h1>
      <ul className="products">
        {
          products.length && products.map(({ id, name, price, urlImage }) => {
            const dataTestIds = {
              title: `customer_products__element-card-title-${id}`,
              price: `customer_products__element-card-price-${id}`,
              image: `customer_products__img-card-bg-image-${id}`,
              quantity: `customer_products__input-card-quantity-${id}`,
              addItem: `customer_products__button-card-add-item-${id}`,
              rmItem: `customer_products__button-card-rm-item-${id}`,
            };

            return (
              <li key={ id }>
                <ProductCard
                  title={ name }
                  price={ price }
                  url={ urlImage }
                  id={ id }
                  updateCart={ updateCart }
                  dataTestIds={ dataTestIds }
                />
              </li>
            );
          })
        }
      </ul>
      <CartButton amount={ amount } />
    </section>
  );
}

export default Products;
