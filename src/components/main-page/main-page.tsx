import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesByGenre, showMoreMovies } from '../../store/action';
import { RootState } from '../../store/state';
import { Footer, Genres, PromoFilm } from '../main-page-utils/utils';
import MoviesList from '../movie-list/movie-list';
import ShowMoreButton from '../show-more-button/show-more-button';


type MainPageProps = {
  promoFilmTitle: string;
  promoFilmGenre: string;
  promoFilmReleaseDate: string;
}

function MainPage(props: MainPageProps) {
  const dispatch = useDispatch();
  const { genre, movies, displayedMoviesCount } = useSelector((state: RootState) => state.movies);

  const handleShowMoreClick = () => {
    dispatch(showMoreMovies());
  };

  useEffect(() => {
    dispatch(fetchMoviesByGenre(genre));
  }, [genre, dispatch]);


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

          <Genres />

          <MoviesList movies={movies.slice(0, displayedMoviesCount)} />

          <ShowMoreButton
            onClick={handleShowMoreClick}
            isVisible={displayedMoviesCount < movies.length}
          />
        </section>

        <Footer />
      </div>
    </div>
  );
}

export default MainPage;
