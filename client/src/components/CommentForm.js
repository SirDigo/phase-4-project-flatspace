import React, { useState} from 'react'
import { useParams } from "react-router-dom";


function CommentForm({addComment, post}) {
  const [formData, setFormData] = useState({
    content:''
  })
  const { id } = useParams();


  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const newComment = {
      ...formData,
      post_id: post.id,
      user_id: id,
      likes: 0,
      dislikes: 0
    };

    fetch(`/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((r) => r.json())
      .then(data => console.log(data));
  }
    
  return (
    <div >
      {/* {errors?errors.map(e => <div>{e}</div>):null} */}

      <form onSubmit={handleSubmit}>
        <h3>What's your thought on this?</h3>
        <input
          type="text"
          name="content"
          onChange={handleChange}
          value={formData.content}
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

// const CommentForm = ({
//   handleSubmit,
//   submitLabel,
//   hasCancelButton = false,
//   handleCancel,
//   initialText = "",
// }) => {
//   const [text, setText] = useState(initialText);
//   const isTextareaDisabled = text.length === 0;
//   const onSubmit = (event) => {
//     event.preventDefault();
//     handleSubmit(text);
//     setText("");
//   };
//   return (
//     <form onSubmit={onSubmit}>
//       <textarea
//         className="comment-form-textarea"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />
//       <button className="comment-form-button" disabled={isTextareaDisabled}>
//         {submitLabel}
//       </button>
//       {hasCancelButton && (
//         <button
//           type="button"
//           className="comment-form-button comment-form-cancel-button"
//           onClick={handleCancel}
//         >
//           Cancel
//         </button>
//       )}
//     </form>
//   );
// };

export default CommentForm;