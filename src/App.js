import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItems from './components/PostItems';
import PostList from './components/PostList';
import './styles/App.css'

function App() {
  const [value, setValue] = useState('text intro input');
  const [posts, setPosts] = useState( [
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript2', body: 'Description'},
    {id:3, title: 'JavaScript 3', body: 'Description'}
  ])
  
  
  return (
    <div className="App">
      <Counter/>
      <h2>{value}</h2>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
      <ClassCounter/>
      <form>
        <input type="text" placeholder='Name de post'/>
        <input type="text" placeholder='Description de post'/>
        <button>Creer de post</button>
      </form>
      <PostList posts={posts} title="Les posts de JS"/>
      
      
    </div>
  );
}

export default App;
