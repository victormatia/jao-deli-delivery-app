import React from 'react';
import PropTypes from 'prop-types';

function OrderStatus({ id, status }) {
  return (
    <div data-testid={ `customer_orders__element-delivery-status-${id}` }>
      <p>
        {' '}
        {status}
        {' '}
      </p>
    </div>
  );
}

OrderStatus.propTypes = {
  id: PropTypes.string,
  status: PropTypes.string,
}.isRequired;

export default OrderStatus;
