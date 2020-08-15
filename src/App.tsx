import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { MainLayout } from './views/layouts';
import { SearchPage, FavoritesPage } from './views/pages';

function App() {
  return (
    <Router>
      <MainLayout>
        <Route exact path='/' component={SearchPage} />
        <Route exact path='/favorites' component={FavoritesPage} />
      </MainLayout>
    </Router>
  );
}


export default App;
