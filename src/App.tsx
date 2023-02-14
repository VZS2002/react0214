import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { TarhelyApi } from './api/tarhely.api';
import { TarhelyDTO } from './api/dto/tarhely.dto';

function App() {
  const [tarhely, setTarhely] = useState<TarhelyDTO[]>([])

  useEffect(() => {
    async function fetchAll() {
      const resp = await TarhelyApi.getAll();

      setTarhely(resp);

    }

    fetchAll();
  }, [])

  return (
    <div className="App">
      <ul>
        
      {
       tarhely.map(tarhely => {
        return <li>{tarhely.nev}</li>
      
       })
       
       }

       
       </ul>
    </div>
  );
}

export default App;
