/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { RootState } from '../../store/root-reducer';


function Player() {
  const { id } = useParams<{ id: string }>();
  const currentFilm = useSelector((state: RootState) => state.movies.currentFilm);
  const promoFilm = useSelector((state: RootState) => state.movies.promoFilm);

  const film = useMemo(() => {
    if (currentFilm && currentFilm.id === id) {
      return currentFilm;
    } else if (promoFilm && promoFilm.id === id) {
      return promoFilm;
    }
    return null;
  }, [id, currentFilm, promoFilm]);

  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [timeLeft, setTimeLeft] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    return [
      h > 0 ? String(h).padStart(2, '0') : null,
      String(m).padStart(2, '0'),
      String(s).padStart(2, '0'),
    ].filter(Boolean).join(':');
  };

  useEffect(() => {
    if (videoRef.current) {
      const updateTimeLeft = () => {
        if (!videoRef.current) {
          return;
        }
        const time = videoRef.current.duration - videoRef.current.currentTime;
        setTimeLeft(formatTime(time));
      };

      videoRef.current.addEventListener('timeupdate', updateTimeLeft);
      return () => {
        /* eslint-disable react-hooks/exhaustive-deps */
        videoRef.current?.removeEventListener('timeupdate', updateTimeLeft);
      };
    }
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      const updateProgressBar = () => {
        if (!videoRef.current) {
          return;
        }
        const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;

        const progressBar = document.querySelector('.player__progress') as HTMLProgressElement;
        if (progressBar) {
          progressBar.value = progress;
        }

        const toggler = document.querySelector('.player__toggler') as HTMLElement;
        if (toggler) {
          toggler.style.left = `${progress}%`;
        }
      };

      videoRef.current.addEventListener('timeupdate', updateProgressBar);
      return () => {
        videoRef.current?.removeEventListener('timeupdate', updateProgressBar);
      };
    }
  }, []);


  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  useEffect(() => {
    const video = videoRef.current!;

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);


  const playerRef = useRef<HTMLDivElement>(null);

  const toggleFullScreen = () => {
    if (!document.fullscreenElement && playerRef.current) {
      playerRef.current.requestFullscreen().catch((err) => {
        // eslint-disable-next-line
        console.error(`Error attempting to enable full-screen mode: ${err.message}`);
      });
    } else if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  const onLoadedData = () => {
    setIsLoading(false);
    if (!videoRef.current) {
      return;
    }
    setTimeLeft(formatTime(videoRef.current.duration));
  };

  return (
    <div className="player" ref={playerRef}>
      <video
        ref={videoRef}
        src={film?.videoLink}
        className="player__video"
        poster={film?.posterImage}
        onLoadedData={onLoadedData}
        autoPlay
      />
      {isLoading && <div className="loading-spinner">Loading...</div>}
      <Link to={`/films/${film!.id}`} className="player__exit">Exit</Link>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"></progress>
            <div className="player__toggler" style={{ left: '30%' }}>Toggler</div>
          </div>
          <div className="player__time-value">{timeLeft}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play" onClick={togglePlay}>
            {isPlaying ? (
              <>
                <svg viewBox="0 0 14 21" width="14" height="21">
                  <use xlinkHref="#pause"></use>
                </svg>
                <span>Pause</span>
              </>
            ) : (
              <>
                <svg viewBox="0 0 19 19" width="19" height="19">
                  <use xlinkHref="#play-s"></use>
                </svg>
                <span>Play</span>
              </>
            )}
          </button>
          <div className="player__name">{film?.name}</div>
          <button type="button" className="player__full-screen" onClick={toggleFullScreen}>
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
