
import { Link, useParams } from 'react-router-dom';
import { FilmShortDescription } from '../../types/film';


type PlayerProps = {
  films: FilmShortDescription[];
};


function Player({ films }: PlayerProps) {
  const { id } = useParams<{ id: string }>();
  // eslint-disable-next-line @typescript-eslint/no-shadow
  const film = films.find((film) => film.id === id) ?? films[0];

  return (
    <div className="player">
      <video src={film.previewVideoLink} className="player__video" poster={film.previewImage}></video>
      <Link to={'/'} className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">1:30:29</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"></use>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"></use>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Player;
