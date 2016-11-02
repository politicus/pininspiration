import React from 'react';
import { Link } from 'react-router';
import GreetingContainer from './greeting/greeting_container';
import ErrorsContainer from './errors/errors_container';

const App = ({ children }) => (
  <div>
    <div>
      <header className="pinspiration-header">
        <Link to="/" className="header-link"><h1>Pinspiration Logo</h1></Link>
        <GreetingContainer />
      </header>
      {children}
    </div>
    <ErrorsContainer />
  </div>
);

export default App;
