import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './App';
import ProductListContainer from './components/products/productList/ProductListContainer';
import ProductDetailContainer from './components/products/productDetail/ProductDetailContainer';
import ProductAddContainer from './components/products/productAdd/ProductAddContainer';
import CartContainer from './components/cart/CartContainer';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={ProductListContainer} />
    <Route path="/cart" component={CartContainer} />
    <Route path="/detail/:productId" component={ProductDetailContainer} />
    <Route path="/add" component={ProductAddContainer} />
  </Route>
);
