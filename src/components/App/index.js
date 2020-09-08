// == Import npm
import React from 'react';

// == Import
import reactLogo from './react-logo.svg';
import './styles.css';

// == Composants
import GithubFinder from 'src/components/GithubFinder';

// == Composant
const App = () => (
  <div className="app">
    <GithubFinder />
  </div>
);

// == Export
export default App;
