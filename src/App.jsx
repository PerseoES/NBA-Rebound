import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Logo from './assets/nba-heat-logo.png';
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <NavBar logo={Logo}/>
      <Routes>
        <Route exact path='/' element={<ItemListContainer/>}></Route>
      </Routes>
    </BrowserRouter>
    
    );
}

export default App;
