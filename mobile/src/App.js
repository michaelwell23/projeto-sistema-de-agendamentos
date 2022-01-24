import React from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';

export default function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const Routes = createRouter(isLoggedIn);

  return <Routes />;
}
