import { BaseFilm, Review } from '../../mocks/films';


function ReviewsTab({ film }: { film: BaseFilm }) {
  const reviews = film.reviews;
  const midpoint = Math.ceil(reviews.length / 2);
  const firstColReviews = reviews.slice(0, midpoint);
  const secondColReviews = reviews.slice(midpoint);

  const renderColumn = (colReviews: Review[]) => (
    <div className="film-card__reviews-col">
      {colReviews.map((review, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <div key={index} className="review">
          <blockquote className="review__quote">
            <p className="review__text">{review.text}</p>
            <footer className="review__details">
              <cite className="review__author">{review.author}</cite>
              <time className="review__date" dateTime={review.date}>{review.formattedDate}</time>
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
