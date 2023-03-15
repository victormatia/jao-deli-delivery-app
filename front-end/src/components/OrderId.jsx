import React from 'react';
import PropTypes from 'prop-types';

function OrderId({ id }) {
  const ID_LENGTH = 10;
  return (
    <div data-testid={ `customer_orders__element-order-id-${id}` }>
      <p>Pedido</p>
      <p>
        {id < ID_LENGTH ? `000${id}` : `00${id}`}
      </p>
    </div>
  );
}
OrderId.propTypes = {
  id: PropTypes.string,
}.isRequired;

export default OrderId;
