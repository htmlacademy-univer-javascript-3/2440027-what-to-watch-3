/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { LoadingScreen } from '../../pages/loading/loading';
import { AppDispatch } from '../../store';
import { fetchFilmDetails, fetchSimilarMovies } from '../../store/api-actions';
import { RootState } from '../../store/root-reducer';
import { AuthorizationStatus } from '../../types/authorization-status';
import { FilmShortDescription } from '../../types/film';
import ErrorPage from '../error-page/error-page';
import { Footer, Header } from '../main-page-utils/utils';
import MoviesList from '../movie-list/movie-list';
import Tabs from '../tabs/tabs';
import NotFoundPage from '../utils/utils';
import MyListButton from '../my-list/my-list-button';


function Film() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const film = useSelector((state: RootState) => state.movies.currentFilm);
  const { authorizationStatus } = useSelector((state: RootState) => state.auth);
  const { loading, error } = useSelector((state: RootState) => state.ui);
  const [similarMovies, setSimilarMovies] = useState<FilmShortDescription[]>([]);

  const isAuthorized = authorizationStatus === AuthorizationStatus.Authenticated;

  useEffect(() => {
    dispatch(fetchFilmDetails(id as string));
    dispatch(fetchSimilarMovies(id as string))
      .unwrap()
      .then((data) => {
        setSimilarMovies(data);
      });
  }, [dispatch, id]);

  if (loading) {
    return <LoadingScreen />;
  }

  if (error) {
    return <ErrorPage message={error} />;
  }

  if (!film) {
    return <NotFoundPage />;
  }

  return (
    <React.Fragment>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <Link to={`/player/${film.id}`} className="btn btn--play film-card__button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </Link>
                {isAuthorized && <MyListButton filmId={film.id} isFavorite={film.isFavorite!} />}

                <Link to={`/films/${film.id}/review`} className="btn film-card__button" style={{ display: isAuthorized ? 'block' : 'none' }}>
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={film.name} width="218" height="327" />
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
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default Film;
