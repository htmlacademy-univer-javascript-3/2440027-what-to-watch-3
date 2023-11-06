import { Link } from "react-router-dom";

type MovieCardProps = {
  id: string;
  title: string;
  imageSrc: string;
  description?: string;
  releaseDate?: string;
  genre?: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

function MovieCard(props: MovieCardProps) {
  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
    >
      <div className="small-film-card__image">
        <img src={props.imageSrc} alt={props.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
          <Link to={`/films/${props.id}`} className="small-film-card__link">{props.title || ""}
          </Link>
      </h3>
    </article>
  );
}

export default MovieCard;
