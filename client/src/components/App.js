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
      <Header />
      <Routes>
        <Route path="/signup" element={<SignUpForm handleSignUp={handleSignUp} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>} />
        <Route path="/login" element={<LoginForm setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/addpost" element={<AddPostForm handlePost={handlePost} errors={errors}/>} />
        <Route path="/:id/:postId" element={<Post />}/>
        <Route path="/:id/*" element={<Profile />} />
        <Route path="/" element={<Home profiles={profiles} setIsAuthenticated={setIsAuthenticated} user={user}/>} />
      </Routes>
    </div>
  );
}

export default App;