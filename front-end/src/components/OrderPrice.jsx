import React from 'react';
import PropTypes from 'prop-types';

function OrderPrice({ id, price }) {
  console.log(typeof price);
  return (
    <div data-testid={ `customer_orders__element-card-price-${id}` }>
      <p>
        {' '}
        R$
        {' '}
        {price.replace('.', ',')}
        {' '}
      </p>
    </div>
  );
}

OrderPrice.propTypes = {
  id: PropTypes.string,
  price: PropTypes.string,
}.isRequired;
export default OrderPrice;
