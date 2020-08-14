import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { searchMovies } from './store/movies/actions';
import logo from './logo.svg';
import './App.css';

function App({ searchMovies: searchMoviesAction }: { searchMovies: (query: string, page: number) => void }) {
  useEffect(() => searchMoviesAction('fight club', 1), [searchMoviesAction]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapDispatchToProps = {
  searchMovies
}

export default connect(null, mapDispatchToProps)(App);
