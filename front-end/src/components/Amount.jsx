import { useContext } from 'react';
import { productsContext } from '../context/ProductsProvider';
import formatPrice from '../utils/formatPrice';

function Amount() {
  const { amount } = useContext(productsContext);

  return (
    <div>
      Total: R$
      <span
        data-testid="customer_checkout__element-order-total-price"
      >
        { formatPrice(amount) }
      </span>
    </div>
  );
}

export default Amount;
