import {useEffect, useState} from 'react'
import Home from "./Home";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import About from "./About";
import AddPostForm from "./AddPostForm";
import Profile from "./Profile";
import { Routes, Route } from "react-router-dom";

function App() {
  const [errors, setErrors] = useState(false)
  const [posts, setPosts] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  // setting the state to authenticated user. If the user is not authenticated, it will be redirected to the login page.
  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });

    fetch('/posts')
    .then(res => res.json())
    .then(setPosts);

  },[]);

  function handlePost(obj){
      fetch('/posts',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(data => {
        if(data.errors){
          setErrors(data.errors)
        } else {
          setPosts([...posts,data])
        }
      })
  }

  if (!isAuthenticated) return <LoginForm error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />;





  return (
    <div className="App">
      <Routes>
        <Route path="/signup" element={<SignUpForm setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>} />
        <Route path="/login" element={<LoginForm setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/addpost" element={<AddPostForm handlePost={handlePost} errors={errors}/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Home setIsAuthenticated={setIsAuthenticated} setUser={setUser} user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;