import PropTypes from 'prop-types';
import formatPrice from '../utils/formatPrice';
import GenericButton from './GenericButton';

function ProductItem({ index, title, quantity, price, dataTestIds, removeItem }) {
  return (
    <tr>
      <td data-testid={ dataTestIds.index }>{ index }</td>
      <td data-testid={ dataTestIds.title }>{ title }</td>
      <td data-testid={ dataTestIds.quantity }>{ quantity }</td>
      <td data-testid={ dataTestIds.price }>{ formatPrice(+price) }</td>
      <td data-testid={ dataTestIds.subtotal }>{ formatPrice(+price * quantity) }</td>
      <td>
        <GenericButton
          title="Remover"
          isDisabled={ false }
          onClick={ () => removeItem(title) }
          dataTestId={ dataTestIds.button }
        />
      </td>
    </tr>
  );
}

ProductItem.propTypes = {
  index: PropTypes.number,
  price: PropTypes.number,
  quantity: PropTypes.number,
  title: PropTypes.string,
}.isRequired;

export default ProductItem;
