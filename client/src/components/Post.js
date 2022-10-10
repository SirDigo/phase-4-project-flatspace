import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

function Post( {user} ) {
  const [post, setPost] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [errors, setErrors] = useState(false)
  
  const { postId } = useParams();

    useEffect(() => {
      fetch(`/posts/${postId}`)
      .then(r => r.json())
      .then(p => {
          setPost(p);
          setIsLoaded(true);
      })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    if (!isLoaded) return <h2>Loading...</h2>;



  return (
    <div className="post-detail" style={{color: "#FFFFFF"}}>
        <h2 className="post-detail">{post.title}</h2>
        {post.image?<img className="post-detail" src={post.image} alt="deetz" />:null}
        <p className="post-detail">{post.content}</p>
        <h2 className="comments-header" style={{color: "#FFFFFF"}}>comments</h2>
        <CommentForm u={user} />
    </div>
  );
}

export default Post;