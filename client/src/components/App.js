import {useEffect, useState} from 'react'
import Header from "./Header";
import Home from "./Home";
import SignUpForm from "./SignUpForm";
import LoginForm from "./LoginForm";
import About from "./About";
import AddPostForm from "./AddPostForm";
import Profile from "./Profile";
import Post from "./Post";
import { Routes, Route } from "react-router-dom";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [profiles, setProfiles] = useState([]);
  // const [id, setId] = useState('')
  // const navigate = useNavigate();

  useEffect(() => {
    fetch("/users")
    .then((r) => r.json())
    .then(data => setProfiles(data))
    }, [])

    useEffect(() => {
      fetch('/authorized_user')
      .then((res) => {
         if (res.ok) {
          res.json()
          .then((user) => {
            // console.log(user)
            setIsAuthenticated(true);
            setUser(user);
            // setId(user.id)
          });
        }
      });
    }, []);


  // if (!isAuthenticated) return <LoginForm error={'please login'} setIsAuthenticated={setIsAuthenticated} setUser={setUser} />


  return (
    <div className="App">
      <Header isAuthenticated={isAuthenticated} user={user} setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>
      <Routes>
        <Route path="/signup" element={<SignUpForm setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>} />
        <Route path="/login" element={<LoginForm setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>} />
        <Route path="/about" element={<About user={user} />} />
        <Route path="/addpost" element={<AddPostForm user={user} />} />
        <Route path="/posts/:postId" element={<Post user={user} />}/>
        <Route path="/:id/*" element={<Profile user={user} />} />
        <Route path="/" element={<Home profiles={profiles} user={user} />} />
      </Routes>
    </div>
  );
}

export default App;