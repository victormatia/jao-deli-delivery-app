import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import OrderId from './OrderId';
import OrderStatus from './OrderStatus';
import OrderDate from './OrderDate';
import OrderPrice from './OrderPrice';

function OrderCard() {
  const [orders, setOrders] = useState([]);
  const navigateTo = useNavigate();
  useEffect(() => {
    axios.get('http://localhost:3001/customer/orders/')
      .then(({ data }) => setOrders(data.result));
  }, [setOrders]);
  console.log(orders);

  return (
    <div>
      {orders.map((item) => (
        <div
          key={ item.id }
          role="link"
          onClick={ () => navigateTo(`/customer/orders/${item.id}`) }
          onKeyDown={ (event) => {
            if (event.key === 'Enter') {
              console.log('apertou');
            }
          } }
          tabIndex={ 0 }
        >
          <OrderId id={ item.id } />
          <OrderStatus id={ item.id } status={ item.status } />
          <OrderDate id={ item.id } date={ item.saleDate } />
          <OrderPrice id={ item.id } price={ item.totalPrice } />
        </div>
      ))}
    </div>
  );
}
export default OrderCard;
