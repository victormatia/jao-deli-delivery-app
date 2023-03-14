import React from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function DetailsSellerCard({ sale }) {
  // const navigateTo = useNavigate();
  const dataTestId1 = 'seller_order_details__element-order-details-label-order-id';
  const dataTestId2 = 'seller_order_details__element-order-details-label-order-date';
  const dataTestId3 = 'seller_order_details__element-order-details-label-delivery-status';
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
        data-testid="seller_order_details__button-preparing-check"
        onClick={ () => {} }
        disabled={ sale.status !== 'Pendente' }
      >
        PREPARAR PEDIDO
      </button>
      <button
        type="button"
        onClick={ () => {} }
        data-testid="seller_order_details__button-dispatch-check"
      >
        SAIU PARA ENTREGA
      </button>
    </section>
  );
}

DetailsSellerCard.propTypes = {
  sale: PropTypes.shape(),
}.isRequired;

export default DetailsSellerCard;
