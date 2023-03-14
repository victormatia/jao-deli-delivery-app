import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBarDetails from '../components/NavBarDetails';
import DetailsSellerCard from '../components/DetailsSellerCard';
import DetailSeller from '../components/DetailsSeller';
import fetchAPI from '../utils/fetchAPI';
import getLocalStorage from '../utils/getLocalStorage';

function DetailsSeller() {
  const [sale, setSale] = useState(undefined);
  const { id } = useParams();

  useEffect(() => {
    const asyncCalback = async () => {
      const { token } = await getLocalStorage('user');
      await fetchAPI(`http://localhost:3001/seller/orders/${id}`, token, setSale);
    };

    asyncCalback();
  }, []);

  return (
    <main>
      <div>
        <NavBarDetails />
        <section>
          <h1>Detalhe do Pedido</h1>
          { sale && (<DetailsSellerCard sale={ sale } />)}
        </section>
        <section>
          { sale && (<DetailSeller sale={ sale } />)}
        </section>
      </div>
    </main>
  );
}

export default DetailsSeller;
