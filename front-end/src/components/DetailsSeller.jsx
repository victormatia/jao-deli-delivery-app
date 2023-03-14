import React from 'react';
import PropTypes from 'prop-types';
import { productsContext } from '../context/ProductsProvider';
import formatPrice from '../utils/formatPrice';

function DetailsSeller({ sale }) {
  const { amount } = useContext(productsContext);
  return (
    <section>
      <p
        data-testid={ `seller_order_details__element-order-table-item-number-
        ${sale.id}` }
      >
        { sale.id }
      </p>
      <h4
        data-testid={ `seller_order_details__element-order-table-name-${sale.id}` }
      >
        { sale.title }
      </h4>
      <p
        data-testid={ `seller_orders__element-order-date-${sale.id}` }
      >
        { sale.quantity }
      </p>
      <p
        data-testid={ `seller_orders__element-card-price-${sale.id}` }
      >
        { sale.totalPrice.replace('.', ',') }
      </p>
      <p
        data-testid={ `seller_orders__element-order-date-${sale.id}` }
      >
        { formatPrice(amount) }
      </p>
    </section>
  );
}

DetailsSeller.propTypes = {
  sale: PropTypes.shape,
}.isRequired;

export default DetailsSeller;
