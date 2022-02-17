import React, { useState} from 'react'

function CommentForm({addComment}) {

  const [formData, setFormData] = useState({
    content:''
  })


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
      likes: 0,
      dislikes: 0
    };

    fetch("/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((r) => r.json())
      .then(addComment);
  }

  return (
    <div >
      {errors?errors.map(e => <div>{e}</div>):null}
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
export default CommentForm;