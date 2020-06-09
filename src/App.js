import React,{ useState } from 'react';
import './App.css';
import { cpfMask } from './mask'

function App() {
  const [state, setState] = useState({ documentId: '' });
   
  function handlechange(e) {
    setState({ documentId: cpfMask(e.target.value) });
  }

  return (
    <div className="App">
      <label>CPF:</label>
        <input 
          maxLength='14'
          name='documentId'
          value={state.documentId}
          onChange={handlechange}
        />
    </div>
  );
}

export default App;
