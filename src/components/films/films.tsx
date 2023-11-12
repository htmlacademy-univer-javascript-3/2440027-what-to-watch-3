import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Footer } from '../main-page-utils/utils';
import { BaseFilm } from '../../mocks/films';
import Tabs from '../tabs/tabs';
import MoviesList from '../movie-list/movie-list';


function getSimilarMovies(films: BaseFilm[], currentFilm: BaseFilm, count = 4) {
  // Разбиваем строку жанров текущего фильма на массив жанров
  const currentGenres = currentFilm.genre.split(', ');

  return films.filter((f) => {
    // Для каждого фильма также разбиваем строку жанров на массив
    const filmGenres = f.genre.split(', ');

    // Проверяем, есть ли совпадение хотя бы одного жанра с жанрами текущего фильма
    return filmGenres.some((genre) => currentGenres.includes(genre)) && f.id !== currentFilm.id;
  }).slice(0, count);
}


function Film({ films: films }: { films: BaseFilm[]}) {
  const { id } = useParams();
  const film = films.find((f: { id: string | undefined }) => f.id === id);

  if (!film) {
    return <div>Film not found</div>;
  }
  const similarMovies = getSimilarMovies(films, film);

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.imageSrc} alt={film.title} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <a href="#" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

            <ul className="user-block">
              <li className="user-block__item">
                <div className="user-block__avatar">
                  <img src="/img/avatar.jpg" alt="User avatar" width="63" height="63" />
                </div>
              </li>
              <li className="user-block__item">
                <a className="user-block__link">Sign out</a>
              </li>
            </ul>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.releaseDate}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>

                <Link to={'/mylist'} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </Link>

                <Link to={`/films/${film.id}/review`} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.imageSrc} alt={film.title} width="218" height="327" />
            </div>

            <div className="film-card__desc">
              <Tabs film={film} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesList movies={similarMovies}></MoviesList>

        </section>

        <Footer/>

      </div>
    </React.Fragment>
  );
}

export default Film;
