import React from 'react';
import PropTypes from 'prop-types';

function OrderDate({ id, date }) {
  const dataApi = new Date(date);
  const dia = dataApi.getDate();
  const mes = dataApi.getMonth() + 1;
  const ano = dataApi.getFullYear();
  const dataFormatada = `${dia}/0${mes}/${ano.toString().substring(0)}`;

  return (
    <div data-testid={ `customer_orders__element-order-date-${id}` }>
      <p>{dataFormatada}</p>
    </div>
  );
}

OrderDate.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
}.isRequired;
export default OrderDate;
