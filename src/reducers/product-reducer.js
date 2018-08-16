export default (state = null, { type, payload }) => {
  switch (type) {
    case 'PRODUCT_FETCH':
      return payload;
    case 'PRODUCT_CREATE':
      return payload;
    default:
      return state;
  }
};
