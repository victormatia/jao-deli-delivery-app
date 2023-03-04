import { useState } from 'react';
import NavBar from '../components/NavBar';
import ProductCard from '../components/ProductCard';
import useAPI from '../hooks/useAPI';
import useLocalStorage from '../hooks/useLocalStorage';

function Products() {
  const [products, setProducts] = useState([]);
  const { token } = useLocalStorage('user');
  useAPI('http://localhost:3001/customer/products', token, setProducts);

  return (
    <section>
      <NavBar />
      <h1>Produtos</h1>
      <ul className="products">
        {
          products.length && products.map(({ id, name, price, url_image: url }) => {
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
                  url={ url }
                  id={ id }
                  dataTestIds={ dataTestIds }
                />
              </li>
            );
          })
        }
      </ul>
    </section>
  );
}

export default Products;
