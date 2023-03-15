import React from 'react';
import NavBar from '../components/NavBar';
import OrderCard from '../components/OrderCard';

function CustomerOrders() {
  return (
    <div>
      <NavBar />
      <section>
        <OrderCard />
      </section>
    </div>
  );
}

export default CustomerOrders;
