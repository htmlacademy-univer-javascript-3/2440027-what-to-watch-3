import { Footer } from '../../components/main-page-utils/utils';
import './styles.css';

export function LoadingScreen(): JSX.Element {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <div className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </div>
        </div>
      </header>

      <div className="user-page__content">
        <p className="loading-text">Loading films</p>
      </div>
      <Footer />
    </div>
  );
}

