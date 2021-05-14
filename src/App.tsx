import React, { FC } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppWithRouter from './AppWithRouter';

const App: FC = () => {
  return (
    <Router>
      <AppWithRouter />
    </Router>
  );
};

export default App;

