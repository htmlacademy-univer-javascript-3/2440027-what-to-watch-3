import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films'; 


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
    <App
      promoTitle={promoData.promoTitle}
      promoGenre={promoData.promoGenre}
      promoReleaseDate={promoData.promoReleaseDate}
      films={films}
    />
  </React.StrictMode>
);

