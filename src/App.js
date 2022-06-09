import React, {useMemo, useState} from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostForm from './components/PostForm';

import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import MyModal from './components/UI/MyModal/MyModal';
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

  const [modal, setModal] = useState(false);

  const sortedPosts = useMemo(() => {
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }, [selectedSort, posts]);

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.includes(searchQuery))
  }, [searchQuery, sortedPosts])
  
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
    // fermer Modal
    setModal(false);
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
      
      <hr style={{margin: '15px 0'}}/>
      <MyButton onClick={() => setModal(true)}>
        Creer user
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </MyModal>
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
        ? <PostList remove={removePost} posts={sortedAndSearchPosts} title="Les posts de JS"/>
        : <h2>Posts n'ont pas été trouvés</h2>
        }
      
      
      
    </div>
  );
}

export default App;
