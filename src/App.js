import React, {useEffect, Fragment} from 'react';
import SearchBar from './components/layouts/Searchbar';
import Logs from './components/logs/Logs';

// Materialize CSS and App CSS
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <Fragment>
      <SearchBar/>
      <div className='container'>
        <Logs/>
      </div>
    </Fragment>
  );
}

export default App;
