import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import formatPrice from '../utils/formatPrice';

function CartButton({ amount }) {
  const navidateTo = useNavigate();

  const redirectToCheckOut = () => {
    navidateTo('/customer/checkout');
  };

  return (
    <button
      type="button"
      onClick={ redirectToCheckOut }
      disabled={ amount === 0 }
      data-testid="customer_products__button-cart"
    >
      Ver Carrinho:
      <span
        data-testid="customer_products__checkout-bottom-value"
      >
        { formatPrice(amount) }
      </span>
    </button>
  );
}

CartButton.propTypes = {
  amount: PropTypes.number,
}.isRequired;

export default CartButton;
