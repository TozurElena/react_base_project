import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PostItems from './PostItems';

const PostList = ({posts, title, remove}) => {
  return (
    <div>
      <h2 style={{textAlign: 'center'}}>{title}</h2>
      <TransitionGroup>
        {posts.map((post, index) => 
          <CSSTransition
              key={post.id}
              timeout={500}
              classNames="post"
            >
            <PostItems remove={remove} number={index + 1} post={post} />
            </CSSTransition>
        
      )}
      </TransitionGroup>
      
    </div>
  );
};

export default PostList;