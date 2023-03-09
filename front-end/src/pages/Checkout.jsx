import Amount from '../components/Amount';
import FormCheckout from '../components/FormCheckout';
import NavBar from '../components/NavBar';
import ProductsTable from '../components/ProducstTable';

function Checkout() {
  return (
    <section>
      <NavBar />
      <h1>Finalizar pedido</h1>
      <ProductsTable />
      <Amount />
      <h2>Detalhes e Endereço para a entrega</h2>
      <FormCheckout />
    </section>
  );
}

export default Checkout;
