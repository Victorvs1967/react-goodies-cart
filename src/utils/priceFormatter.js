const priceFormatter = price => {
  const priceFormatter = new Intl.NumberFormat();
  return priceFormatter.format(price);
};

export default priceFormatter;