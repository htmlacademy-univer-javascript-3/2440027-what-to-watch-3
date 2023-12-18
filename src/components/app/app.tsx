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


function App() {

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <MainPage />
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
