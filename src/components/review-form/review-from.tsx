import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { AppDispatch } from '../../store';
import { postComment } from '../../store/api-actions';


const ReviewForm: React.FC = () => {
  const [rating, setRating] = useState(8);
  const [reviewText, setReviewText] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const isReviewValid = reviewText.length > 50 && reviewText.length < 400;
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (id && isReviewValid) {
      dispatch(postComment({ filmId: id, comment: reviewText, rating }))
        .unwrap()
        .then(() => {
          navigate(`/films/${id}`);
        });
    }
  };

  return (
    <form action="#" className="add-review__form" onSubmit={handleSubmit}>
      <div className="rating">
        <div className="rating__stars">
          {Array.from({ length: 10 }, (_, index) => 10 - index).map((ratingValue) => (
            <React.Fragment key={ratingValue}>
              <input
                className="rating__input"
                id={`star-${ratingValue}`}
                type="radio"
                name="rating"
                value={ratingValue}
                checked={rating === ratingValue}
                onChange={() => setRating(ratingValue)}
              />
              <label className="rating__label" htmlFor={`star-${ratingValue}`}>Rating {ratingValue}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isReviewValid}>Post</button>
        </div>
      </div>
    </form>
  );
};

export default ReviewForm;
