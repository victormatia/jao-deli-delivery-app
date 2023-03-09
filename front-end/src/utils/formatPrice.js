const formatPrice = (price) => {
  const arrPrice = price.toFixed(2).split('.');
  return `${arrPrice[0]},${arrPrice[1]}`;
};

export default formatPrice;
