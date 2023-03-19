import { useNavigate } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import GenericButton from './GenericButton';
import UserCard from './UserCard';

function NavBarDetails() {
  const { name } = useLocalStorage('user');
  const navigateTo = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigateTo('/login');
  };

  const redirectToOrders = () => {
    navigateTo('/seller/orders');
  };

  return (
    <nav>
      <GenericButton
        title="PEDIDOS"
        isDisabled={ false }
        onClick={ redirectToOrders }
        dataTestId="customer_products__element-navbar-link-orders"
      />
      <UserCard
        name={ name }
        url="https://img.icons8.com/color/256/circled-user-male-skin-type-7.png"
        dataTestId="customer_products__element-navbar-user-full-name"
      />
      <GenericButton
        title="SAIR"
        isDisabled={ false }
        onClick={ logout }
        dataTestId="customer_products__element-navbar-link-logout"
      />
    </nav>
  );
}

export default NavBarDetails;
