import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AppDispatch } from '../../store';
import { fetchFilmComments } from '../../store/api-actions';
import { Review } from '../../types/review';


function formatDate(isoDate: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: '2-digit', day: '2-digit' };
  const date = new Date(isoDate);
  return new Intl.DateTimeFormat('ru-RU', options).format(date);
}


function ReviewsTab() {
  const { id } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (id) {
      dispatch(fetchFilmComments(id))
        .unwrap()
        .then((data) => setReviews(data))
        .catch((err) => <div>Something went wrong: {err}</div>);
    }
  }, [dispatch, id]);

  const midpoint = Math.ceil(reviews.length / 2);
  const firstColReviews = reviews.slice(0, midpoint);
  const secondColReviews = reviews.slice(midpoint);

  const renderColumn = (colReviews: Review[]) => (
    <div className="film-card__reviews-col">
      {colReviews.map((review) => (
        <div key={review.id} className="review">
          <blockquote className="review__quote">
            <p className="review__text">{review.comment}</p>
            <footer className="review__details">
              <cite className="review__author">{review.user}</cite>
              <time className="review__date" dateTime={review.date}>{formatDate(review.date)}</time>
            </footer>
          </blockquote>
          <div className="review__rating">{review.rating}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="film-card__reviews film-card__row">
      {renderColumn(firstColReviews)}
      {renderColumn(secondColReviews)}
    </div>
  );
}


export default ReviewsTab;
