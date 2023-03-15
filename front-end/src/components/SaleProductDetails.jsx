import PropTypes from 'prop-types';
import formatPrice from '../utils/formatPrice';

function SaleProductDetails({ index, title, quantity, price, dataTestIds }) {
  return (
    <tr>
      <td data-testid={ dataTestIds.index }>{ index }</td>
      <td data-testid={ dataTestIds.title }>{ title }</td>
      <td data-testid={ dataTestIds.quantity }>{ quantity }</td>
      <td data-testid={ dataTestIds.price }>{ formatPrice(+price) }</td>
      <td data-testid={ dataTestIds.subtotal }>{ formatPrice(+price * quantity) }</td>
    </tr>
  );
}

SaleProductDetails.propTypes = {
  index: PropTypes.number,
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
}.isRequired;

export default SaleProductDetails;
