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
      <div style={{color: "#87AB88", maxWidth: "800px"}} className="container">
        {errors?errors.map(e => <div>{e}</div>):null}
       <form onSubmit={onSubmit} className="row">
         <div className='six columns'>
            <label for="title">Title</label>
            <input placeholder='required...' className='u-full-width' id="title" type="text" value={formData.title} onChange={(e) => setFormData(e.target.value)} />
        </div>
        <div className='six columns'>
            <label for="image">Image</label>
            <input placeholder='optional...' className='u-full-width' id="image" type="text" value={formData.image} onChange={(e) => setFormData(e.target.value)} />
        </div>
        <div className='row'>
          <div className='twelve columns'>
            <label for="content">Content</label>
            <textarea placeholder='required...' style={{height: "150px"}} className='u-full-width' id="content" type="text" value={formData.content} onChange={(e) => setFormData(e.target.value)} />
          </div>
        </div>
        <input type="submit" value="Post" className='button button-first u-pull-right'/>
       </form>
      </div>
    );
  }
export default AddPostForm;