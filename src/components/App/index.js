// == Import npm
import React from 'react';
import 'semantic-ui-css/semantic.min.css'

// == Import
import reactLogo from './react-logo.svg';
import './styles.scss';

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
