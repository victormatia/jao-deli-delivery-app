import React from 'react';
// import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';

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
        { moment(sale.saleDate).format('DD/MM/YYYY') }
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
        isDisabled={ sale.status !== 'Pendente' }
      >
        PREPARAR PEDIDO
      </button>
      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ () => {} }
        disabled
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
