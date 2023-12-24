import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../store';
import { logout } from '../../store/api-actions';
import { RootState } from '../../store/root-reducer';
import { AuthorizationStatus } from '../../types/authorization-status';


export function MyListHeader({ filmCount }: { filmCount: number }) {
  const { authorizationStatus, userInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const handleSignOutClick = () => {
    dispatch(logout())
      .unwrap()
      .then(() => navigate('/'));
  };

  return (
    <header className="page-header user-page__head">
      <div className="logo">
        <Link to="/" className="logo__link">
          <span className="logo__letter logo__letter--1">W</span>
          <span className="logo__letter logo__letter--2">T</span>
          <span className="logo__letter logo__letter--3">W</span>
        </Link>
      </div>

      <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{filmCount}</span></h1>

      <ul className="user-block">
        {authorizationStatus === AuthorizationStatus.Authenticated ? (
          <>
            <li className="user-block__item">
              <div className="user-block__avatar">
                <img src={userInfo?.avatarUrl} alt="User avatar" width="63" height="63" />
              </div>
            </li>
            <li className="user-block__item">
              <a className="user-block__link" onClick={handleSignOutClick}>Sign out</a>
            </li>
          </>
        ) : (
          <li className="user-block__item">
            <Link to="/login" className="user-block__link">Sign in</Link>
          </li>
        )}
      </ul>
    </header>
  );
}
