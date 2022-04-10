import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './core/config/globalStyles';

import Routes from './routes/routes';

function App(): React.ReactElement {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes />
      </Router>
    </>
  );
}

export default App;
