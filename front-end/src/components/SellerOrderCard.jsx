import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function SellerOrderCard({ sale }) {
  const navigateTo = useNavigate();
  return (
    <section>

      <button
        type="button"
        onClick={ () => {
          navigateTo(`/seller/orders/${sale.id}`);
        } }
      >
        <p data-testid={ `seller_orders__element-order-id-${sale.id}` }>

          { sale.id }
        </p>
        <h4
          data-testid={ `seller_orders__element-delivery-status-${sale.id}` }
        >
          { sale.status }
        </h4>
        <p
          data-testid={ `seller_orders__element-order-date-${sale.id}` }
        >
          { sale.saleDate }
        </p>
        <p
          data-testid={ `seller_orders__element-card-price-${sale.id}` }
        >
          { sale.totalPrice.replace('.', ',') }
        </p>
        <p
          data-testid={ `seller_orders__element-order-date-${sale.id}` }
        >
          { sale.deliveryAddress + sale.deliveryNumber }
        </p>
      </button>
    </section>
  );
}

SellerOrderCard.propTypes = {
  sale: PropTypes.shape,
}.isRequired;

export default SellerOrderCard;
