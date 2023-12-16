import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchFavoriteMovies } from '../../store/api-actions';
import { RootState } from '../../store/root-reducer';
import { Footer } from '../main-page-utils/utils';
import MoviesList from '../movie-list/movie-list';
import { MyListHeader } from '../utils/mylist-header';


function MyList() {
  const dispatch = useDispatch<AppDispatch>();
  const { favoriteFilms } = useSelector((state: RootState) => state.movies);

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  }, [dispatch]);

  const filmCount = favoriteFilms.length;
  return (
    <div className="user-page">
      <MyListHeader filmCount={filmCount} />
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <MoviesList movies={favoriteFilms} />
      </section>
      <Footer />
    </div>
  );
}

export default MyList;
