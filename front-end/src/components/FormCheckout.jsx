import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { productsContext } from '../context/ProductsProvider';
import useLocalStorage from '../hooks/useLocalStorage';
import GenericButton from './GenericButton';
// import getLocalStorage from '../utils/getLocalStorage';

function FormCheckout() {
  const { cart, amount, sellers } = useContext(productsContext);
  const navidateTo = useNavigate();
  const [seller, setSeller] = useState(1);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const { token, id: userId } = useLocalStorage('user');

  const redirectToOrders = async () => {
    await axios.post('http://localhost:3001/customer/orders', {
      userId,
      sellerId: seller,
      totalPrice: amount,
      deliveryAddress: address,
      deliveryNumber: number,
      cart,
    }, {
      headers: { Authorization: token },
    }).then(({ data: { result: { id } } }) => {
      navidateTo(`/customer/orders/${id}`);
    })
      .catch(({ response }) => console.log(response));
  };

  const onSubmit = (event) => event.preventDefault();

  return (
    <form onSubmit={ onSubmit }>
      <label htmlFor="sellers">
        <select
          id="sellers"
          value={ seller }
          onChange={ ({ target }) => setSeller(target.value) }
          data-testid="customer_checkout__select-seller"
        >
          {
            sellers.map(({ name, id }) => (
              <option key={ name } value={ id }>{ name }</option>))
          }
        </select>
      </label>
      <label htmlFor="address">
        Endereço
        <input
          id="address"
          value={ address }
          type="text"
          onChange={ ({ target }) => setAddress(target.value) }
          data-testid="customer_checkout__input-address"
        />
      </label>
      <label htmlFor="number">
        Número
        <input
          id="number"
          value={ number }
          type="number"
          onChange={ ({ target }) => setNumber(target.value) }
          data-testid="customer_checkout__input-address-number"
        />
      </label>
      <GenericButton
        title="Finalizar pedido"
        isDisabled={ false }
        onClick={ redirectToOrders }
        dataTestId="customer_checkout__button-submit-order"
      />
    </form>
  );
}

export default FormCheckout;
