const productFetch = product => ({
  type: 'PRODUCT_FETCH',
  payload: product,
});

const productCreate = product => ({
  type: 'PRODUCT_CREATE',
  payload: product,
});

const productFetchRequest = product => (store) => {
  store.dispatch(productFetch(product));
  return product;
};

const productCreateRequest = product => (store) => {
  store.dispatch(productCreate(product));
  return product;
};

export { productCreateRequest, productFetchRequest };
