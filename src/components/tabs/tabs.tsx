import { useState, useCallback } from 'react';
import { FilmFullDescription } from '../../types/film';
import DetailsTab from './details-tab';
import OverviewTab from './overview-tab';
import ReviewsTab from './reviews-tab';


function Tabs({ film }: { film: FilmFullDescription }) {
  const [activeTab, setActiveTab] = useState('overview');

  const handleTabClick = useCallback((tabName: string, event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    setActiveTab(tabName);
  }, []);

  return (
    <div>
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          <li className={`film-nav__item ${activeTab === 'overview' ? 'film-nav__item--active' : ''}`}>
            <a href="#" className="film-nav__link" onClick={(e) => handleTabClick('overview', e)}>Overview</a>
          </li>
          <li className={`film-nav__item ${activeTab === 'details' ? 'film-nav__item--active' : ''}`}>
            <a href="#" className="film-nav__link" onClick={(e) => handleTabClick('details', e)}>Details</a>
          </li>
          <li className={`film-nav__item ${activeTab === 'reviews' ? 'film-nav__item--active' : ''}`}>
            <a href="#" className="film-nav__link" onClick={(e) => handleTabClick('reviews', e)}>Reviews</a>
          </li>
        </ul>
      </nav>

      {activeTab === 'overview' && <OverviewTab film={film} />}
      {activeTab === 'details' && <DetailsTab film={film} />}
      {activeTab === 'reviews' && <ReviewsTab />}
    </div>
  );
}

export default Tabs;
