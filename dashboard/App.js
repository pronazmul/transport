// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import Environment from './pages/Environment/Environment';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div>
          <Switch>
            <Route path="/" component={Environment} />
          </Switch>
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;