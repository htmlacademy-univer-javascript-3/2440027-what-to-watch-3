import { useSelector, useDispatch } from 'react-redux';
import { changeGenre } from '../../store/action';
import { RootState } from '../../store/root-reducer';
import { AuthorizationStatus } from '../../types/authorization-status';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/api-actions';
import { AppDispatch } from '../../store';
import { useCallback, useMemo } from 'react';

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
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        {children}

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src={userInfo?.avatarUrl} alt="User avatar" width="63" height="63" />
            </div>
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
          <a className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
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

type PromoFilmProps = {
  title: string;
  genre: string;
  releaseDate: string;
  bgImageSrc: string;
  posterImageSrc: string;
};

export function PromoFilm(props: PromoFilmProps) {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={props.bgImageSrc} alt={props.title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header />

      <div className="film-card__wrap">
        <div className="film-card__info">
          <div className="film-card__poster">
            <img src={props.posterImageSrc} alt={`${props.title} poster`} width="218" height="327" />
          </div>

          <div className="film-card__desc">
            <h2 className="film-card__title">{props.title}</h2>
            <p className="film-card__meta">
              <span className="film-card__genre">{props.genre}</span>
              <span className="film-card__year">{props.releaseDate}</span>
            </p>
            <div className="film-card__buttons">
              <button className="btn btn--play film-card__button" type="button">
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </button>
              <button className="btn btn--list film-card__button" type="button">
                <svg viewBox="0 0 19 20" width="19" height="20">
                  <use xlinkHref="#add"></use>
                </svg>
                <span>My list</span>
                <span className="film-card__count">9</span>
              </button>
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
