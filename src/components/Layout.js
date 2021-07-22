import React from 'react';
import { Navbar, SnackbarMaker } from './index';
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
  const notification = useSelector((state) => state.notification);
  return (
    <main>
      <Navbar />
      {children}
      {notification?.message ? (
        <SnackbarMaker
          message={notification.message}
          variant={notification.variant}
          duration={notification.duration}
          times={notification.times}
        />
      ) : (
        ''
      )}
    </main>
  );
};

export default Layout;
