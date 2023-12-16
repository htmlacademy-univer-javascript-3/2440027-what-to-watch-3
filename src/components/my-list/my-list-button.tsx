import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store';
import { fetchFavoriteMovies, fetchFilmDetails, postFavoriteStatus } from '../../store/api-actions';
import { RootState } from '../../store/root-reducer';


const MyListButton = ({ filmId, isFavorite }: { filmId: string; isFavorite: boolean }) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchFavoriteMovies());
  }, [dispatch]);

  const handleMyListClick = () => {
    const status = isFavorite ? 0 : 1;
    dispatch(postFavoriteStatus({ filmId, status })).unwrap().then(() => {
      dispatch(fetchFilmDetails(filmId));
    });
  };
  const favoriteFilms = useSelector((state: RootState) => state.movies.favoriteFilms);

  return (
    <button onClick={handleMyListClick} className="btn btn--play film-card__button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref={isFavorite ? '#in-list' : '#add'}></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">{favoriteFilms.length}</span>
    </button>
  );
};

export default MyListButton;
