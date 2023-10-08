import react from 'react';

type GenresProps = {
  genres: string[];
  activeGenre: string;
};

export function Genres(props: GenresProps) {
  return (
    <ul className="catalog__genres-list">
      {props.genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item ${props.activeGenre === genre ? 'catalog__genres-item--active' : ''}`}
        >
          <a href="#" className="catalog__genres-link">{genre}</a>
        </li>
      ))}
    </ul>
  );
}

type HeaderProps = {
  userAvatarSrc: string;
};

function Header(props: HeaderProps) {
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
          <div className="user-block__avatar">
            <img src={props.userAvatarSrc} alt="User avatar" width="63" height="63" />
          </div>
        </li>
        <li className="user-block__item">
          <a className="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>
  );
}

type PromoFilmProps = {
  title: string;
  genre: string;
  releaseDate: string;
  bgImageSrc: string;
  posterImageSrc: string;
  userAvatarSrc: string;
};

export function PromoFilm(props: PromoFilmProps) {
  return (
    <section className="film-card">
      <div className="film-card__bg">
        <img src={props.bgImageSrc} alt={props.title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>
      <Header userAvatarSrc={props.userAvatarSrc} />

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
        <p>© 2019 What to watch Ltd.</p>
      </div>
    </footer>
  );
}

