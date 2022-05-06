import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItems from './components/PostItems';
import './styles/App.css'

function App() {
  const [value, setValue] = useState('text intro input')
  
  return (
    <div className="App">
      <Counter/>
      <h2>{value}</h2>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
      <ClassCounter/>
      <PostItems post={{id:1, title: 'JavaScript', body: 'Description'}} />
      
    </div>
  );
}

export default App;
