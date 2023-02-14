import CSS from 'csstype';

const tableWrapper: CSS.Properties = {
    width:'70%',
    margin:' 0 15% 15%',
    
    
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
  
  const button: CSS.Properties = {
    padding: '5px',
    marginTop: '15px',
  };
  const td: CSS.Properties = {
    padding: '10px',
    border: '1px solid gray',
    
  };

  const input: CSS.Properties = {
    padding: '5px',
    
    
  };
const Felvetel = () => {
 
  return (
 <div style={tableWrapper}>
    <table style={tableWrapper}>
         <div style={tableTitle}>Új szolgáltatás felvétele</div> 
             
    <tr> <th style={td} >Név</th>     
         {
         <td style={td}><input style={input} type="text" /></td>
         }            
    </tr>
    <tr> <th style={td} >Tárhely</th>     
         {
         <td style={td}><input style={input} type="number" /></td>
         }          
    </tr>
    <tr> <th style={td} >Ár</th>     
         {
         <td style={td}><input style={input} type="number" /></td>
         }         
    </tr>
  
    <input style={button} type="submit" />
    
    </table>


 </div>
  )
}

export default Felvetel