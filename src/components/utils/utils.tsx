import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';


function NotFoundPage() {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>Эта страница не найдена.</p>
      <a href="/">Вернуться на главную</a>
    </div>
  );
}

export default NotFoundPage;


type ProtectedWrapperProps = {
  children: React.ReactNode;
}

export const ProtectedWrapper: React.FC<ProtectedWrapperProps> = ({ children }) => {
  const navigate = useNavigate();
  const isAuthorized = true; // TODO вернуть false

  useEffect(() => {
    if (!isAuthorized) {
      navigate('/login');
    }
  }, [isAuthorized, navigate]);

  if (!isAuthorized) {
    return null;
  }

  return children as React.ReactElement | null;
};


ProtectedWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
