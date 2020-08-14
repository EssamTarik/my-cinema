import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import { SearchBarContainer } from './containers';
import { MainLayout } from './views/layouts';

function App() {
  return (
    <Router>
      <MainLayout>
        <Route path='/' component={() => <SearchBarContainer />} />
      </MainLayout>
    </Router>
  );
}


export default App;
