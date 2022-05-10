import React from "react";

const PostItems = (props) => {
  return(
    <div className='post'>
        <div className='post_content'>
          <strong>{props.number}.{props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <div className='post_btns'>
          <button>Supprimer</button>
        </div>
    </div>
    
  )
}
export default PostItems;