import PropTypes from 'prop-types';
import { useState } from 'react';
import GenericButton from './GenericButton';

function ProductCard({ price, title, url, dataTestIds }) {
  const [count, setCount] = useState(0);
  const formatPrice = () => {
    const arrPrice = price.split('.');
    return `${arrPrice[0]},${arrPrice[1]}`;
  };

  return (
    <div>
      <span
        data-testid={ dataTestIds.price }
      >
        { formatPrice() }
      </span>
      <img
        data-testid={ dataTestIds.image }
        src={ url }
        alt={ title }
        width="250px"
      />
      <p
        data-testid={ dataTestIds.title }
      >
        { title }
      </p>
      <GenericButton
        title="+"
        isDisabled={ false }
        onClick={ () => setCount((prevState) => prevState + 1) }
        dataTestId={ dataTestIds.addItem }
      />
      <input
        value={ count }
        data-testid={ dataTestIds.quantity }
      />
      <GenericButton
        title="-"
        isDisabled={ false }
        onClick={ () => setCount((prevState) => (prevState === 0 ? 0 : prevState - 1)) }
        dataTestId={ dataTestIds.rmItem }
      />
    </div>
  );
}

ProductCard.propTypes = {
  price: PropTypes.number,
  title: PropTypes.string,
  url: PropTypes.string,
}.isRequired;

export default ProductCard;
