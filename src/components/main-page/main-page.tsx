import { useEffect, useCallback, memo} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingScreen } from '../../pages/loading/loading';
import { AppDispatch } from '../../store';
import { fetchMoviesByGenre, setFilteredFilms, showMoreMovies } from '../../store/action';
import { fetchMoviesList } from '../../store/api-actions';
import { RootState } from '../../store/root-reducer';
import { Footer, Genres, PromoFilm } from '../main-page-utils/utils';
import MoviesList from '../movie-list/movie-list';
import ShowMoreButton from '../show-more-button/show-more-button';


const ShowMoreButtonMemo = memo(ShowMoreButton);

function MainPage() {
  const dispatch = useDispatch<AppDispatch>();
  const { genre, filteredFilms: movies, allFilms, displayedMoviesCount } = useSelector((state: RootState) => state.movies);
  const { loading } = useSelector((state: RootState) => state.ui);

  useEffect(() => {
    dispatch(fetchMoviesList());
  }, [dispatch]);

  const handleShowMoreClick = useCallback(() => {
    dispatch(showMoreMovies());
  }, [dispatch]);

  useEffect(() => {
    if (movies.length > 0) {
      dispatch(fetchMoviesByGenre(genre));
    }
  }, [genre, dispatch, movies.length]);

  useEffect(() => {
    if (genre === 'All genres') {
      dispatch(setFilteredFilms(allFilms));
    } else {
      dispatch(setFilteredFilms(allFilms.filter((movie) => movie.genre === genre)));
    }
  }, [genre, allFilms, dispatch]);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div>
      <PromoFilm />

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres />

          <MoviesList movies={movies.slice(0, displayedMoviesCount)} />

          <ShowMoreButtonMemo
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
