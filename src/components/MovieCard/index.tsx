type MovieCardProps = {
    imageSrc: string;
    title: string;
}

function MovieCard(props: MovieCardProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.imageSrc} alt={props.title} width="280" height="175" />
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="#">{props.title}</a>
      </h3>
    </article>
  );
}

export default MovieCard;
