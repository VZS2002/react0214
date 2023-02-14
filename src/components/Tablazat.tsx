import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TarhelyDTO } from '../api/dto/tarhely.dto'
import { TarhelyApi } from '../api/tarhely.api'
import CSS from 'csstype';
import { hover } from '@testing-library/user-event/dist/hover';

const tableWrapper: CSS.Properties = {
    width:'70%',
    margin:' 0 15% 15%',
    
    background: '#fff',
    padding: '20px',
    
   display:'inline-block',
   textAlign:'center',
   
   borderCollapse: 'collapse',
   
   
  };
  const tableTitle: CSS.Properties = {
    paddingBottom: '10px',
    margin: '0 0 10px',
    fontSize: '30px',
    textAlign:'center',
    
  };
  const x: CSS.Properties = {
    
    color:'red',
    fontSize: '30px',
    fontWeight: 'bold'
   
    
  };



  const td: CSS.Properties = {
    padding: '10px',
    border: '1px solid gray',
    
  };
const Tablazat = () => {
    const [tarhely, setTarhely] = useState<TarhelyDTO[]>([])

    
  useEffect(() => {
    async function fetchAll() {
      const resp = await TarhelyApi.getAll();

      setTarhely(resp);

    }

    fetchAll();
  }, [])
  
  
  return (
    <div style={tableWrapper}>
        <table style={tableWrapper}> <div style={tableTitle}>Szolgáltatások</div>
             <tr> <th style={td} >Név</th>     
         {
          tarhely.map(tarhely => {
          return <td style={td}>{tarhely.nev}</td>
         })   
          
         }
             </tr>
             <tr><th style={td}>Tárhely</th>     
            {
          tarhely.map(tarhely => {
          return <td style={td}>{tarhely.tarhely} MB</td>
         })    
            }
            </tr>
             <tr><th style={td}>Ár</th>     
          {
          tarhely.map(tarhely => {
          return <td style={td}>{tarhely.ar} Ft/év</td>
         })    
         }
            </tr>
             <tr><th> </th>     
              {
               tarhely.map(tarhely => {
               return <td style={x}> x </td>
              })    
             }
            </tr>
         </table>
     </div>
  )
}

export default Tablazat