import React, {useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostForm from './components/PostForm';

import PostList from './components/PostList';
import MyInput from './components/UI/input/MyInput';
import MySelect from './components/UI/select/MySelect';

import './styles/App.css'

function App() {
  const [value, setValue] = useState('text intro input');
  const [posts, setPosts] = useState( [
    {id:1, title: 'JavaScript', body: 'Description'},
    {id:2, title: 'avaScript2', body: 'scription'},
    {id:3, title: 'vaScript 3', body: 'description'}
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }

  const sortedPosts = getSortedPosts()
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  } 
  
  // get post from component child
  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }
  const sortPosts = (sort) => {
    setSelectedSort(sort);
   
  }
  
  return (
    <div className="App">
      <Counter/>
      <h2>{value}</h2>
      <input type="text" value={value} onChange={event => setValue(event.target.value)}/>
      <ClassCounter/>
      <PostForm create={createPost}/>
      <hr style={{margin: '15px 0'}}/>

      <div>
        <MyInput
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Search..."
        />
        <MySelect
            value={selectedSort}
            onChange={sortPosts}
            defaultValue="Sort sur"
            options={[
              {value: 'title', name: 'Sur title'},
              {value: 'body', name: 'Sur description'},

            ]}
        />
      </div>
      {posts.length !== 0
        ? <PostList remove={removePost} posts={sortedPosts} title="Les posts de JS"/>
        : <h2>Posts n'ont pas été trouvés</h2>
        }
      
      
      
    </div>
  );
}

export default App;
