import React, {useEffect, Fragment} from 'react';
import SearchBar from './components/layouts/Searchbar';
import Logs from './components/logs/Logs';
import AddBtn from './components/layouts/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';

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
        <AddBtn/>
        <AddTechModal/>
        <AddLogModal/>
        <EditLogModal/>
        <TechListModal/>
        <Logs/>
      </div>
    </Fragment>
  );
}

export default App;