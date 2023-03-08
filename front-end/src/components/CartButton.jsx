import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function CartButton({ amount }) {
  const navidateTo = useNavigate();

  const redirectToCheckOut = () => {
    navidateTo('/customer/checkout');
  };

  const formatPrice = () => {
    const arrPrice = amount.toFixed(2).split('.');
    return `${arrPrice[0]},${arrPrice[1]}`;
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
        {amount !== 0 ? formatPrice() : 0}
      </span>
    </button>
  );
}

CartButton.propTypes = {
  amount: PropTypes.number,
}.isRequired;

export default CartButton;
