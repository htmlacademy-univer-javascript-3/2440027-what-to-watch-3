import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import store from './store/';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const promoData = {
  promoTitle: 'The Grand Budapest Hotel',
  promoGenre: 'Drama',
  promoReleaseDate: '2014',
};

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promoTitle={promoData.promoTitle}
        promoGenre={promoData.promoGenre}
        promoReleaseDate={promoData.promoReleaseDate}
      />
    </Provider>
  </React.StrictMode>
);

