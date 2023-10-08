import React from 'react';
import MovieCard from '../MovieCard';
import {Genres, PromoFilm, Footer} from '../MainPageUtils';


type MainPageProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmReleaseDate: string;
}

const movies = [
  {imageSrc: 'img/fantastic-beasts-the-crimes-of-grindelwald.jpg', title: 'Fantastic Beasts: The Crimes of Grindelwald'},
  {imageSrc: 'img/bohemian-rhapsody.jpg', title: 'Bohemian Rhapsody'},
  {imageSrc: 'img/macbeth.jpg', title: 'Macbeth'},
  {imageSrc: 'img/aviator.jpg', title: 'Aviator'},
  {imageSrc: 'img/we-need-to-talk-about-kevin.jpg', title: 'We need to talk about Kevin'},
  {imageSrc: 'img/what-we-do-in-the-shadows.jpg', title: 'What We Do in the Shadows'},
  {imageSrc: 'img/revenant.jpg', title: 'Revenant'},
  {imageSrc: 'img/johnny-english.jpg', title: 'Johnny English'},
  {imageSrc: 'img/shutter-island.jpg', title: 'Shutter Island'},
  {imageSrc: 'img/pulp-fiction.jpg', title: 'Pulp Fiction'},
  {imageSrc: 'img/no-country-for-old-men.jpg', title: 'No Country for Old Men'},
  {imageSrc: 'img/snatch.jpg', title: 'Snatch'},
  {imageSrc: 'img/moonrise-kingdom.jpg', title: 'Moonrise Kingdom'},
  {imageSrc: 'img/seven-years-in-tibet.jpg', title: 'Seven Years in Tibet'},
  {imageSrc: 'img/midnight-special.jpg', title: 'Midnight Special'},
  {imageSrc: 'img/war-of-the-worlds.jpg', title: 'War of the Worlds'},
  {imageSrc: 'img/dardjeeling-limited.jpg', title: 'Dardjeeling Limited'},
  {imageSrc: 'img/orlando.jpg', title: 'Orlando'},
  {imageSrc: 'img/mindhunter.jpg', title: 'Mindhunter'},
  {imageSrc: 'img/midnight-special.jpg', title: 'Midnight Special'}
];

const genres = ['All genres', 'Comedies', 'Crime', 'Documentary', 'Dramas', 'Horror', 'Kids & Family', 'Romance', 'Sci-Fi', 'Thrillers'];


function MainPage(props: MainPageProps) {

  return (
    <div>
      <PromoFilm
        title={props.promoFilmTitle}
        genre={props.promoFilmGenre}
        releaseDate={props.promoFilmReleaseDate}
        bgImageSrc="/img/bg-the-grand-budapest-hotel.jpg"
        posterImageSrc="/img/the-grand-budapest-hotel-poster.jpg"
        userAvatarSrc="/img/avatar.jpg"
      />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <Genres genres={genres} activeGenre="All genres" />

          <div className="catalog__films-list">
            {movies.map((movie) => <MovieCard key={movie.title} imageSrc={movie.imageSrc} title={movie.title} />)}
          </div>

          <div className="catalog__more">
            <button className="catalog__button" type="button">Show more</button>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
