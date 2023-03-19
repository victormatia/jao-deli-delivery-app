import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import axios from 'axios';
import GenericButton from './GenericButton';
import getLocalStorage from '../utils/getLocalStorage';

function DetailsSellerCard({ sale, updateSale }) {
  const dataTestId1 = 'seller_order_details__element-order-details-label-order-id';
  const dataTestId2 = 'seller_order_details__element-order-details-label-order-date';
  const dataTestId3 = 'seller_order_details__element-order-details-label-delivery-status';

  const updateOrder = async (status) => {
    try {
      await axios.patch(`http://localhost:3001/customer/orders/${sale.id}`, {
        status,
      });

      const { token } = await getLocalStorage('user');

      const { data } = await axios.get(`http://localhost:3001/seller/orders/${sale.id}`, { headers: {
        Authorization: token,
      },
      });

      updateSale(data.result);
    } catch (e) {
      console.log(e.message);
    }
  };

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
      <GenericButton
        className=""
        title="PREPARAR PEDIDO"
        isDisabled={ sale.status !== 'Pendente' }
        onClick={ () => updateOrder('Preparando') }
        icon=""
        dataTestId="seller_order_details__button-preparing-check"
      />
      <GenericButton
        className=""
        title="SAIU PARA ENTREGA"
        isDisabled={ sale.status !== ('Preparando' || 'Em Trânsito') }
        onClick={ () => updateOrder('Em Trânsito') }
        icon=""
        dataTestId="seller_order_details__button-dispatch-check"
      />
    </section>
  );
}

DetailsSellerCard.propTypes = {
  sale: PropTypes.shape(),
}.isRequired;

export default DetailsSellerCard;
