import { useContext } from 'react';
import CartButton from '../components/CartButton';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import { productsContext } from '../context/ProductsProvider';

function Products() {
  const { products, cart, setCart, amount } = useContext(productsContext);

  const updateCart = (id, title, price, quantity) => {
    const doesProductAlreayExists = cart.find((product) => product.title === title);
    const cartNoThisProduct = cart.filter((product) => product.title !== title);

    if (quantity === 0) {
      setCart(cartNoThisProduct);
    } else if (doesProductAlreayExists) {
      doesProductAlreayExists.quantity = quantity;
      setCart([...cartNoThisProduct, doesProductAlreayExists]);
    } else {
      setCart((prevCart) => [...prevCart, { id, title, price, quantity }]);
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
