import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import SellerOrderCard from '../components/SellerOrderCard';
import fetchAPI from '../utils/fetchAPI';
import getLocalStorage from '../utils/getLocalStorage';

function SellerOrders() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const asyncCalback = async () => {
      const { token } = await getLocalStorage('user');
      await fetchAPI('http://localhost:3001/customer/orders', token, setSales);
    };

    asyncCalback();
  }, []);

  return (
    <main>
      <div>
        <NavBar />
        <section>
          {(sales.length > 0) && (
            sales.map(
              (sale) => (<SellerOrderCard key={ sale.id } sale={ sale } />),
            ))}
        </section>
      </div>
    </main>
  );
}

export default SellerOrders;
