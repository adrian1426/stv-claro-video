import React from 'react';
import { Provider } from 'react-redux';
import store from '../store';

const WrapperRedux = props => {
  const { children } = props;

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default WrapperRedux;