import PropTypes from 'prop-types';
import { useContext } from 'react';
import { productsContext } from '../context/ProductsProvider';
import ProductItem from './ProductItem';

const headers = ['Item',
  'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total', 'Remover item'];

function ProductsTable() {
  const { cart, setCart } = useContext(productsContext);

  const removeItem = (title) => {
    const cartNoThisProduct = cart.filter((product) => product.title !== title);
    setCart(cartNoThisProduct);
  };

  return (
    <table>
      <thead>
        <tr>
          {
            headers.map((header) => (<th key={ header }>{ header }</th>))
          }
        </tr>
      </thead>
      <tbody>
        {
          cart.map((item, i) => {
            const dataTestIds = {
              index: `customer_checkout__element-order-table-item-number-${i}`,
              title: `customer_checkout__element-order-table-name-${i}`,
              quantity: `customer_checkout__element-order-table-quantity-${i}`,
              price: `customer_checkout__element-order-table-unit-price-${i}`,
              subtotal: `customer_checkout__element-order-table-sub-total-${i}`,
              button: `customer_checkout__element-order-table-remove-${i}`,
            };

            return (<ProductItem
              key={ i }
              index={ i + 1 }
              title={ item.title }
              quantity={ item.quantity }
              price={ item.price }
              dataTestIds={ dataTestIds }
              removeItem={ removeItem }
            />);
          })
        }
      </tbody>
    </table>
  );
}

ProductsTable.propTypes = {
  headers: PropTypes.array,
  items: PropTypes.array,
}.isRequired;

export default ProductsTable;
