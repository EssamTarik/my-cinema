import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { MainLayout } from './views/layouts';
import { SearchPage, FavoritesPage, WatchLaterPage } from './views/pages';

function App() {
  return (
    <Router basename='/my-cinema'>
      <MainLayout>
        <Route exact path='/' component={SearchPage} />
        <Route exact path='/favorites' component={FavoritesPage} />
        <Route exact path='/watch-later' component={WatchLaterPage} />
      </MainLayout>
    </Router>
  );
}


export default App;
