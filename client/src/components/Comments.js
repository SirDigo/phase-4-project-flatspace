import { useState, useEffect } from "react";
import CommentForm from "./CommentForm";


const Comments = ({ userId, postId, commentId }) => {
  const [backendComments, setBackendComments] = useState([]);
  const [activeComment, setActiveComment] = useState(null);
  console.log("comments", backendComments)
  // const rootComments = backendComments.filter(
  //   (backendComment) => backendComment.parentId === null
  // );
  
  // const addComment = (content, parentId) => {
  //   createCommentApi(content, parentId)
  //   .then((comment) => {
  //     setBackendComments([comment, ...backendComments]);
  //     setActiveComment(null);
  //   });
  // };

  useEffect(() => {
    fetch(`/posts/${postId}/comments/${commentId}`)
    .then((data) => {
      setBackendComments(data);
    });
  }, []);

  return (
    <div>
      <h3>Comments</h3>
      <div>Write comment</div>
      <CommentForm submitLabel="Write"  />
  {/* handleSubmit={addComment}  */}
    </div>
  );
};

export default Comments;