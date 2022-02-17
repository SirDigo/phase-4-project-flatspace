import React, { useEffect, useState } from "react";

function Post( {userId, postId} ) {
  const [post, setPost] = useState([]);
  // const [isLoaded, setIsLoaded] = useState(false);

  // const path = `/${userId}/${postId}`
  // const { postId } = useParams();

    useEffect(() => {
      fetch(`/users/${userId}/posts/${postId}`)
      .then((r) => r.json())
      .then(post => {
      setPost(post);
      // setIsLoaded(true)
      console.log(post)
      })
    }, [userId, postId])

    // if (!isLoaded) return <h2>Loading...</h2>;

    // const commentItems = post.comments.map(comment => {
    //   return (
    //       <p key={comment.id}>
    //         {comment.content}
    //       </p>
    //   )
    // })

  return (
    <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        {/* <div>{commentItems}</div> */}
    </div>
  );
}

export default Post;