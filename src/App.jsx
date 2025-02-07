//import React from "react"
import PageLayout from "./layouts/PageLayout"
//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import AppRoutes from "./routes/AppRoutes"
function App() {


  return (
     <>
     <PageLayout />
     </>
  //<Router><AppRoutes /></Router>
    
  )
}

export default App

/*
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageLayout from './layouts/PageLayout'; // Main repository component
import AppRoutes from './routes/AppRoutes'; // Admin dashboard routes

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/admin">
          <AppRoutes />
        </Route>
        <Route path="/">
          <PageLayout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
*/
/*
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PageLayout from './layouts/PageLayout'; // Main repository component
import AppRoutes from './routes/AppRoutes'; // Admin dashboard routes

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/*" element={<PageLayout />} />
        <Route path="/admin/*" element={<AppRoutes />} />
        
      </Routes>
    </Router>
  );
}

export default App;
*/