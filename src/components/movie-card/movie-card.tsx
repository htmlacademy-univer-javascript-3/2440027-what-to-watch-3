/* eslint-disable react/no-unused-prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import VideoPlayer from '../utils/video-player';
import useDelayedHover from '../../hooks/use-delayed-hover';

type MovieCardProps = {
  id: string;
  title: string;
  imageSrc: string;
  description?: string;
  releaseDate?: string;
  genre?: string;
  trailerSrc: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

const MovieCard: React.FC<MovieCardProps> = ({ id, title, imageSrc, trailerSrc }) => {
  const { isPlaying, onMouseEnter, onMouseLeave } = useDelayedHover(1000);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="small-film-card__image">
        {isPlaying ? (
          <VideoPlayer src={trailerSrc} poster={imageSrc} isPlaying={isPlaying} />
        ) : (
          <img src={imageSrc} alt={title} width="280" height="175" />
        )}
      </div>
      <h3 className="small-film-card__title">
        <Link to={`/films/${id}`} className="small-film-card__link">
          {title}
        </Link>
      </h3>
    </article>
  );
};

export default MovieCard;

