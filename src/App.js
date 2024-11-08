import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Migrate from './Pages/Migrate';
import DiscoverAndAsses from './Pages/DiscoverAndAsses';
import 'bootstrap/dist/css/bootstrap.min.css';


const  App =()=> {


  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/discover" element={<DiscoverAndAsses/>} />
          <Route path="/migrate" element={<Migrate />}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;


