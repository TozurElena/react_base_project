import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostForm from './components/PostForm';

import PostList from './components/PostList';

import './styles/App.css'

function App() {
  const [value, setValue] = useState('text intro input');
  const [posts, setPosts] = useState( [
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'JavaScript2', body: 'Description'},
    {id:3, title: 'JavaScript 3', body: 'Description'}
  ])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  } 
  
  
  return (
    <div className="App">
      <Counter/>
      <h2>{value}</h2>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
      <ClassCounter/>
      <PostForm create={createPost}/>
      <PostList posts={posts} title="Les posts de JS"/>
      
      
    </div>
  );
}

export default App;
