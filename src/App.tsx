import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { MainLayout } from './views/layouts';
import { SearchPage } from './views/pages';

function App() {
  return (
    <Router>
      <MainLayout>
        <Route path='/' component={SearchPage} />
      </MainLayout>
    </Router>
  );
}


export default App;
