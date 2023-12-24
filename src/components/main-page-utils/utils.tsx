import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store';
import { changeGenre } from '../../store/action';
import { logout } from '../../store/api-actions';
import { RootState } from '../../store/root-reducer';
import { AuthorizationStatus } from '../../types/authorization-status';
import MyListButton from '../my-list/my-list-button';


export function Genres() {
  const dispatch = useDispatch<AppDispatch>();
  const allFilms = useSelector((state: RootState) => state.movies.allFilms);

  const uniqueGenres = useMemo(() => ['All genres', ...new Set(allFilms.map((film) => film.genre))], [allFilms]);

  const onGenreClick = useCallback((genre: string) => {
    dispatch(changeGenre(genre));
  }, [dispatch]);

  return (
    <ul className="catalog__genres-list">
      {uniqueGenres.map((genre) => (
        <li
          key={genre}
          className="catalog__genres-item"
        >
          <div className="catalog__genres-link" onClick={() => onGenreClick(genre)}>{genre}</div>
        </li>
      ))}
    </ul>
  );
}


export function Header({ children }: { children?: React.ReactNode }) {
  const { authorizationStatus, userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    dispatch(logout())
      .unwrap()
      .then(() => navigate('/'));
  };

  if (authorizationStatus === AuthorizationStatus.Authenticated) {
    return (
      <header className="page-header film-card__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        {children}

        <ul className="user-block">
          <li className="user-block__item">
            <Link to="/mylist">
              <div className="user-block__avatar">
                <img src={userInfo?.avatarUrl} alt="User avatar" width="63" height="63" />
              </div>
            </Link>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" onClick={handleSignOutClick}>Sign out</a>
          </li>
        </ul>
      </header>
    );
  } else {
    return (
      <header className="page-header film-card__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <ul className="user-block">
          <li className="user-block__item">
            <Link to="/login" className="user-block__link">Sign in</Link>
          </li>
        </ul>
      </header>
    );
  }
}


export function PromoFilm() {
  const promoFilm = useSelector((state: RootState) => state.movies.promoFilm);
  const favoriteFilms = useSelector((state: RootState) => state.movies.favoriteFilms);
  const isAuthorized = useSelector((state: RootState) => state.auth.authorizationStatus === AuthorizationStatus.Authenticated);
  const [isFavorite, setIsFavorite] = useState(promoFilm?.isFavorite);

  useEffect(() => {
    if (promoFilm) {
      setIsFavorite(favoriteFilms.some((film) => film.id === promoFilm.id));
    }
  }, [favoriteFilms, promoFilm]);

  if (!promoFilm) {
    return null;
  }

  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={promoFilm?.backgroundImage} alt={promoFilm?.name} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={promoFilm?.posterImage} alt={`${promoFilm.name} poster`} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{promoFilm?.name}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{promoFilm?.genre}</span>
              <span className="film-card__year">{promoFilm?.released}</span>
            </p>
            <div className="film-card__buttons">
              <Link to={`/player/${promoFilm.id}`} className="btn btn--play film-card__button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </Link>
              {/* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */}
              {isAuthorized && <MyListButton filmId={promoFilm.id} isFavorite={isFavorite!} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="page-footer">
      <div className="logo">
        <a className="logo__link logo__link--light">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <div className="copyright">
        <p>© 2023 What to watch Ltd.</p>
      </div>
    </footer>
  );
}
