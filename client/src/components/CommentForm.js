import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";

function CommentForm( { u } ) {
  const [content, setContent] = useState('')
  const [errors, setErrors] = useState(false)
  const [comments, setComments] = useState([])
  const { postId } = useParams();

  useEffect(() => {
    fetch(`/posts/${postId}/comments`)
    .then(r => r.json())
    .then(dat => {
      if(dat.errors){
        setErrors(dat.errors)
      } else {
        setComments(dat);
        console.log(dat)
      }
    })
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  function handleComment(obj){
    fetch(`/posts/${postId}/comments`,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => {
      if(data.errors){
        setErrors(data.errors)
      } else {
        setComments([...comments, data])
      }
    })
}


  function handleSubmit(event) {
    event.preventDefault();
    const comm = {
      user_id: u.id,
      post_id: postId,
      content: content
    }
    handleComment(comm)
    setContent('');
  }

  const commentItems = comments.map(comment => {
    return (
      <div className="comment" style={{color: "#FFFFFF"}} key={comment.id}>
        <h3 className="comment" style={{fontSize: "1.7em"}}>{comment.user.username}</h3>
        <p className="comment" key={comment.id}>
        {comment.content}
        </p>
      </div>
      )
  })

    
  return (
    <div>
      {errors?console.log(errors):null}
      <div>{commentItems}</div>
      <form onSubmit={handleSubmit}>
        <h3>What's your thought on this?</h3>
        <input
          className="comment-input"
          type="text"
          name="content"
          onChange= {(e) => setContent(e.target.value)}
          value={content}
          placeholder="Share your comment here ..."
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Comment"
          className="submit"
        />
      </form>
    </div>
  );
}


export default CommentForm;