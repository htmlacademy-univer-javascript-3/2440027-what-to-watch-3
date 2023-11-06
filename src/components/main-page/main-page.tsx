import {Genres, PromoFilm, Footer} from '../main-page-utils/utils';
import { BaseFilm } from '../../mocks/films';
import MoviesList from '../movie-list/movie-list';


type MainPageProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmReleaseDate: string;
  films: BaseFilm[];
}

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
          <MoviesList movies={props.films} />

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
