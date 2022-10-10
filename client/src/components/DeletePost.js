import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';

function DeletePost({user, post}) {
  const [errors, setErrors] = useState(false)
  const navigate = useNavigate();

  function handleDelete(obj){
    fetch(`/posts/${obj.id}`,{
      method:'DELETE',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    })
    .then(res => res.json())
    .then(data => {
      if(data.errors){
        setErrors(data.errors)
        console.log(errors)
      } else {
        console.log('Deleted post!')
        navigate(`/${user.id}`);
      }
    })
  };

  function onSubmit(e) {
    console.log(post)
    handleDelete(post);
  }

  console.log(post)
//   console.log(user)

//   const priv = () => {
//     if (user.id === post.user.id.toString()) {
//       return (
//       <Link to="/addpost" style={{color: "#FFFFFF"}} element={<AddPostForm  user={user} />}>add post</Link>
//       )
//     }
//   }


    return (
      <div style={{color: "#FFFFFF"}}>
        {errors?console.log(errors):null}
       <form onSubmit={onSubmit}>
        <input className="delete" type="submit" value="Delete" />
       </form>
      </div>
    );
  }
export default DeletePost;