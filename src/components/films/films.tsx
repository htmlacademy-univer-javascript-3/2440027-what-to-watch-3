import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Footer } from '../main-page-utils/utils';
import { BaseFilm } from '../../mocks/films';


function Film({ films: films }: { films: BaseFilm[]}) {
  const { id } = useParams();
  const film = films.find((f: { id: string | undefined }) => f.id === id);

  if (!film) {
    return <div>Film not found</div>;
  }

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
                <span className="film-card__year">1111</span>
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
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  <li className="film-nav__item film-nav__item--active">
                    <a href="#" className="film-nav__link">Overview</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Details</a>
                  </li>
                  <li className="film-nav__item">
                    <a href="#" className="film-nav__link">Reviews</a>
                  </li>
                </ul>
              </nav>

              <div className="film-rating">
                <div className="film-rating__score">8,9</div>
                <p className="film-rating__meta">
                  <span className="film-rating__level">Very good</span>
                  <span className="film-rating__count">240 ratings</span>
                </p>
              </div>

              <div className="film-card__text">
                <p>{film.description}</p>
                <p className="film-card__director"><strong>Director: Wes Anderson</strong></p>
                <p className="film-card__starring"><strong>Starring: Bill Murray, Edward Norton, Jude Law, Willem Dafoe and other</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <div className="catalog__films-list">
            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="/img/fantastic-beasts-the-crimes-of-grindelwald.jpg" alt="Fantastic Beasts: The Crimes of Grindelwald" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link to={'/films/1'} className="small-film-card__link">
                  {'Fantastic Beasts: The Crimes of Grindelwald'}
                </Link>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="/img/bohemian-rhapsody.jpg" alt="Bohemian Rhapsody" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link to={'/films/2'} className="small-film-card__link">
                  {'Bohemian Rhapsody'}
                </Link>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="/img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link to={'/films/3'} className="small-film-card__link">
                  {'Macbeth'}
                </Link>
              </h3>
            </article>

            <article className="small-film-card catalog__films-card">
              <div className="small-film-card__image">
                <img src="/img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-film-card__title">
                <Link to={'/films/4'} className="small-film-card__link">
                  {'Aviator'}
                </Link>
              </h3>
            </article>
          </div>
        </section>

        <Footer/>

      </div>
    </React.Fragment>
  );
}

export default Film;
