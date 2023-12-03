import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../store/api-actions';
import { RootState } from '../../store/state';
import { AppDispatch } from '../../store';
import { AuthorizationStatus } from '../../types/authorization-status';
import { Footer } from '../main-page-utils/utils';
import SignInError from './sign-in-error';
import { useEffect } from 'react';


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const {authorizationStatus, error } = useSelector((state: RootState) => state.movies);
  const [isLoginAttempted, setIsLoginAttempted] = useState(false);


  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoginAttempted(true);
    dispatch(login({ email, password }))
      .then(() => {
        if (authorizationStatus === AuthorizationStatus.Authenticated) {
          navigate('/');
        }
      });
  };

  useEffect(() => {
    if (isLoginAttempted && authorizationStatus === AuthorizationStatus.Authenticated) {
      navigate('/');
    }
  }, [isLoginAttempted, authorizationStatus, navigate]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <a href="#" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>
        <h1 className="page-title user-page__title">Sign in</h1>
      </header>
      <div className="sign-in user-page__content">
        <form className="sign-in__form" onSubmit={handleSubmit}>
          {error && <SignInError />}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input className="sign-in__input" type="email" placeholder="Email address" name="user-email" id="user-email" value={email} onChange={handleEmailChange} />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">Email address</label>
            </div>
            <div className="sign-in__field">
              <input className="sign-in__input" type="password" placeholder="Password" name="user-password" id="user-password" value={password} onChange={handlePasswordChange} />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">Password</label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button className="sign-in__btn" type="submit">Sign in</button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
