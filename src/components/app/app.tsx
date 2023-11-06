/* eslint-disable react/no-unused-prop-types */
import MainPage from '../main-page/main-page.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from '../utils/utils.tsx';
import SignIn from '../login/sign-in.tsx';
import MyList from '../my-list/my-list.tsx';
import Film from '../films/films.tsx';
import AddReview from '../review/add-review.tsx';
import Player from '../player/player.tsx';
import {ProtectedWrapper} from '../utils/utils.tsx';
import {BaseFilm, films} from '../../mocks/films.ts';


type AppProps = {
  promoTitle: string;
  promoGenre: string;
  promoReleaseDate: string;
  films: BaseFilm[];
};

function App(props: AppProps) {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <MainPage
              promoFilmTitle={props.promoTitle}
              promoFilmGenre={props.promoGenre}
              promoFilmReleaseDate={props.promoReleaseDate}
              films={films}
            />
          }
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="/mylist" element={<ProtectedWrapper><MyList /></ProtectedWrapper>} />
          <Route path="/films/:id" element={<Film films={films}/>} />
          <Route path="/films/:id/review" element={<AddReview films={films} />} />
          <Route path="/player/:id" element={<Player films={films}/>} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
