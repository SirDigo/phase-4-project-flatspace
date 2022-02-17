import React, { useState} from 'react'

function AddPostForm({handlePost, errors}) {

  const [formData, setFormData] = useState({
    title:'',
    image:'',
    content:''
  })


  function onSubmit(e){
    e.preventDefault()
    const post = {
      title: formData.title,
      image: formData.image,
      content: formData.content,
    }
    handlePost(post)
  }
    return (
      <div>
        {errors?errors.map(e => <div>{e}</div>):null}
       <form onSubmit={onSubmit}>
       <label>
          Title
          <input type="text" value={formData.title} onChange={(e) => setFormData(e.target.value)} />
        </label>
        <br/>
        <label>
        Image
          <input type="text" value={formData.image} onChange={(e) => setFormData(e.target.value)} />
        </label>
        <br/>
        <label>
        Content
          <textarea type="text" value={formData.content} onChange={(e) => setFormData(e.target.value)} />
        </label>
        <br/>
        <input type="submit" value="Post" />
       </form>
      </div>
    );
  }
export default AddPostForm;