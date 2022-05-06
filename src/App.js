import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';

function App() {
  const [value, setValue] = useState('')
  
  return (
    <div className="App">
      <Counter/>
      <h2>{value}</h2>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
      <ClassCounter/>
      
    </div>
  );
}

export default App;
