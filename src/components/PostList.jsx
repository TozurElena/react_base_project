import React from 'react';
import PostItems from './PostItems';

const PostList = ({posts, title}) => {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>{title}</h2>
      {posts.map((post) => 
        <PostItems post={post} key={post.id}/>
      )}
    </div>
  );
};

export default PostList;