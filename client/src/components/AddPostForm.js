import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

function AddPostForm({user, post}) {
  const [errors, setErrors] = useState(false)
  const [posts, setPosts] = useState([])
  const [title, setTitle] = useState('')
  const [image, setImage] = useState('')
  const [content, setContent] = useState('')
  const navigate = useNavigate();

  function handlePost(obj){
    fetch(`users/${user.id}/posts`,{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => {
      if(data.errors){
        setErrors(data.errors)
      } else {
        setPosts([...posts, data])
        navigate(`/${user.id}`);
      }
    })
}

  function onSubmit(e) {
    e.preventDefault()
    const post = {
      title: title,
      image: image,
      content: content
    }
    handlePost(post);
    console.log(post)
  }

  // const [formData, setFormData] = useState({
  //   title:'',
  //   image:'',
  //   content:''
  // })


  // function onSubmit(e){
  //   e.preventDefault()
  //   const post = {
  //     title: formData.title,
  //     image: formData.image,
  //     content: formData.content,
  //   }
  //   handlePost(post)
  //   console.log(post)
  // }
    return (
      <div style={{color: "#FFFFFF", marginLeft: "1em", marginTop: "1em"}}>
        {errors?console.log(errors):null}
        {/* {errors?errors.map(e => <div>{e}</div>):null} */}
       <form onSubmit={onSubmit}>
       <label>
          Title
          <input className="post-input" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br/>
        <label>
        Image
          <input className="post-input" type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br/>
        <label>
        Content
          <textarea className="post-input" type="text" value={content} onChange={(e) => setContent(e.target.value)} />
        </label>
        <br/>
        <input type="submit" value="Post" />
       </form>
      </div>
    );
  }
export default AddPostForm;