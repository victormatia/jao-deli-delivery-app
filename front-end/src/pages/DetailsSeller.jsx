import React, { useEffect, useState } from 'react';
import NavBarDetails from '../components/NavBarDetails';
import DetailsSellerCard from '../components/DetailsSellerCard';
import DetailSeller from '../components/DetailsSeller';
import fetchAPI from '../utils/fetchAPI';
import getLocalStorage from '../utils/getLocalStorage';

function DetailsSeller() {
  const [sales, setSales] = useState([]);

  useEffect(() => {
    const asyncCalback = async () => {
      const { token } = await getLocalStorage('user');
      await fetchAPI('http://localhost:3001/seller/orders', token, setSales);
    };

    asyncCalback();
  }, []);

  return (
    <main>
      <div>
        <NavBarDetails />
        <section>
          <h1>Detalhe do Pedido</h1>
          {(sales.length > 0) && (
            sales.map(
              (sale) => (<DetailsSellerCard key={ sale.id } sale={ sale } />),
            ))}
        </section>
        <section>
          {(sales.length > 0) && (
            sales.map(
              (sale) => (<DetailSeller key={ sale.id } sale={ sale } />),
            ))}
        </section>
      </div>
    </main>
  );
}

export default DetailsSeller;
