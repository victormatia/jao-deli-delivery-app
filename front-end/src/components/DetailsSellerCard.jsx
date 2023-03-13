import React from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function DetailsSellerCard({ sale }) {
  // const navigateTo = useNavigate();
  const dataTestId1 = `seller_order_details__element-order-details-label-order-id-
  ${sale.id}`;
  const dataTestId2 = `seller_order_details__element-order-details-label-order-date-
  ${sale.id}`;
  const dataTestId3 = `seller_orders_details__element-order-details-label-delivery-status-
  ${sale.id}`;
  return (
    <section>
      <p data-testid={ dataTestId1 }>

        { sale.id }
      </p>
      <p
        data-testid={ dataTestId2 }
      >
        { sale.saleDate }
      </p>
      <h4
        data-testid={ dataTestId3 }
      >
        { sale.status }
      </h4>
      <button
        type="button"
        onClick={ () => {} }
      >
        <p
          data-testid="seller_order_details__button-preparing-check"
        >
          PREPARAR PEDIDO
        </p>
      </button>
      <button
        type="button"
        onClick={ () => {} }
      >
        <p
          data-testid="seller_order_details__button-dispatch-check"
        >
          SAIU PARA ENTREGA
        </p>
      </button>
    </section>
  );
}

DetailsSellerCard.propTypes = {
  sale: PropTypes.objectOf.isRequired,
};

export default DetailsSellerCard;
