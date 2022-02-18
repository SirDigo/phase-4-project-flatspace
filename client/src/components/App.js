import {useEffect, useState} from 'react'
import Header from "./Header";
import Home from "./Home";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import About from "./About";
import AddPostForm from "./AddPostForm";
import Profile from "./Profile";
import Post from "./Post";
import { Routes, Route, useNavigate } from "react-router-dom";

function App() {
  const [errors, setErrors] = useState(false)
  const [posts, setPosts] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch("/users")
    .then((r) => r.json())
    .then(data => setProfiles(data))
}, [])

function handleSignUp(u){
  fetch('/users', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(u)
  })
  .then(res => res.json())
  .then(data => {
    if(data.errors){
      setErrors(data.errors)
    } else {
      setProfiles([...profiles, data]);
      setIsAuthenticated(true);
      navigate(`/${data.id}`);
      setUser(data);
    }
  })
}

  useEffect(() => {
    fetch('/authorized_user')
    .then((res) => {
      if (res !== true) {
        res.json()
        .then(() => {
          setIsAuthenticated(false);
          setUser(null);
        })
      }
      else if (res.ok) {
        res.json()
        .then((user) => {
          setIsAuthenticated(true);
          setUser(user);
        });
      }
    });
  },[]);

  useEffect(() => {
    fetch('/posts')
    .then(res => res.json())
    .then(setPosts);
  }, []);

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


  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} user={user} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>
      <Routes>
        <Route path="/signup" element={<SignUpForm handleSignUp={handleSignUp} />} />
        <Route path="/login" element={<LoginForm setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/addpost" element={<AddPostForm handlePost={handlePost} errors={errors}/>} />
        <Route path="/:id/:postId" element={<Post />}/>
        <Route path="/:id/*" element={<Profile user={user} />} />
        <Route path="/" element={<Home profiles={profiles} />} />
      </Routes>
    </div>
  );
}

export default App;