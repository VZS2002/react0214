import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TarhelyApi } from './api/tarhely.api';
import { TarhelyDTO } from './api/dto/tarhely.dto';
import Tablazat from './components/Tablazat';
import Felvetel from './components/Felvetel';

function App() {
  return (
    <div className="App">
     <Tablazat/>
     <Felvetel/>
     </div>
  );
}

export default App;
