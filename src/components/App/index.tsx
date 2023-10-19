import MainPage from '../MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundPage from '../Utils';
import SignIn from '../login/sign-in.tsx';
import MyList from '../myList/my-list.tsx';
import Film from '../films/films.tsx';
import AddReview from '../review/add-review.tsx';
import Player from '../player/player.tsx';
import {ProtectedWrapper} from '../Utils';

type AppProps = {
  promoTitle: string;
  promoGenre: string;
  promoReleaseDate: string;
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
            />
          }
          />
          <Route path="/login" element={<SignIn />} />
          <Route path="/mylist" element={<ProtectedWrapper><MyList /></ProtectedWrapper>} />
          <Route path="/films/:id" element={<Film />} />
          <Route path="/films/:id/review" element={<AddReview />} />
          <Route path="/player/:id" element={<Player />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
