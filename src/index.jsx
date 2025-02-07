import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './main.jsx'; 
import AppRoutes from './routes/AppRoutes'; 
import './Index.css'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/admin" component={AppRoutes} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));

