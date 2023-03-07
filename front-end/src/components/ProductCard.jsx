import PropTypes from 'prop-types';
import { useState } from 'react';
import GenericButton from './GenericButton';

function ProductCard({ price, title, url, updateCart, dataTestIds }) {
  const [count, setCount] = useState(0);
  const formatPrice = () => {
    const arrPrice = price.split('.');
    return `${arrPrice[0]},${arrPrice[1]}`;
  };

  const onChange = ({ target: { value } }) => {
    const currCount = value < 0 ? 0 : +value;
    setCount(currCount);
    updateCart(title, price, currCount);
  };

  const addItem = () => {
    setCount((prevCount) => {
      const currCount = prevCount + 1;
      updateCart(title, price, currCount);
      return currCount;
    });
  };

  const rmItem = () => {
    setCount((prevCount) => {
      const currCount = prevCount === 0 ? 0 : prevCount - 1;
      updateCart(title, price, currCount);
      return currCount;
    });
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
        onClick={ addItem }
        dataTestId={ dataTestIds.addItem }
      />
      <input
        value={ count }
        onChange={ (e) => onChange(e) }
        data-testid={ dataTestIds.quantity }
      />
      <GenericButton
        title="-"
        isDisabled={ false }
        onClick={ rmItem }
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
