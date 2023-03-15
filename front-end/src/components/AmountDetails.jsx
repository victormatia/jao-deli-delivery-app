import React from 'react';
import PropTypes from 'prop-types';

function AmountDetails({ sale }) {
  return (
    <div>
      Total: R$
      <span
        data-testid="seller_order_details__element-order-total-price"
      >
        { sale.totalPrice.replace('.', ',') }
      </span>
    </div>
  );
}

AmountDetails.propTypes = {
  sale: PropTypes.shape,
}.isRequired;

export default AmountDetails;
