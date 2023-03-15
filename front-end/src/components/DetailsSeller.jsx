import React from 'react';
import PropTypes from 'prop-types';
import SaleProductDetails from './SaleProductDetails';

const headers = ['Item',
  'Descrição', 'Quantidade', 'Valor Unitário', 'Sub-total'];

function DetailsSeller({ sale }) {
  console.log(sale);
  return (
    <table>
      <thead>
        <tr>
          {
            headers.map((header) => (<th key={ header }>{ header }</th>))
          }
        </tr>
      </thead>
      <tbody>
        {
          sale.product.map((item, i) => {
            const dataTestIds = {
              index: `seller_order_details__element-order-table-item-number-
            ${i}`,
              title: `seller_order_details__element-order-table-name-${i}`,
              quantity: `seller_orders__element-order-date-${i}`,
              price: `seller_orders__element-card-price-${i}`,
              subtotal: `seller_orders__element-order-date-${i}`,
            };

            return (<SaleProductDetails
              key={ i }
              index={ i + 1 }
              title={ item.name }
              quantity={ item.SaleProduct.quantity }
              price={ item.price }
              subtotal={ item.price * item.SaleProduct.quantity }
              dataTestIds={ dataTestIds }
            />);
          })
        }
      </tbody>
    </table>
  );
}

DetailsSeller.propTypes = {
  sale: PropTypes.shape,
}.isRequired;

export default DetailsSeller;
