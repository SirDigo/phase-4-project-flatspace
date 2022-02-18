import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CommentForm from "./CommentForm";

function Post(handleAddComment) {

  const [post, setPost] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // const id = p.id;

  // const path = `/${userId}/${postId}`
  const params = useParams();
  // console.log(params);

  // function handleAddComment(u){
  //   fetch('/comments', {
  //     method: 'POST',
  //     headers: {'Content-Type': 'application/json'},
  //     body:JSON.stringify(u)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     if(data.errors){
  //       setErrors(data.errors)
  //     } else {
  //       setProfiles([...profiles, data]);
  //       setIsAuthenticated(true);
  //       navigate(`/${data.id}`);
  //       setUser(data);
  //     }
  //   })
  // }

    useEffect(() => {
      fetch(`/posts/${params.postId}`)
      .then((r) => r.json())
      .then(po => {
        setPost(po);
      setIsLoaded(true)
      })
    }, [])

    // const { ti, con } = post;
    // const [title, setTitle] = useState("");
    // const [content, setContent] = useState("");
    // setTitle(ti);
    // setContent(con);

    if (!isLoaded) return <h2>Loading...</h2>;

    const commentItems = post.comments.map(comment => {
      return (
          <p key={comment.id}>
            {comment.content}
          </p>
      )
    })

  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <div>{commentItems}</div>
        <CommentForm post={post} handleAddComment={handleAddComment}/>
    </div>
  );
}

export default Post;