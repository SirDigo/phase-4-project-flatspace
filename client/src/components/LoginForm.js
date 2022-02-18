import React, {useState} from 'react'
// import Home from './Home';
// import Navigate from "react-router-dom";
import { useNavigate } from 'react-router-dom';



function LoginForm({ handleLogin, setUser,setIsAuthenticated}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState([])

    const history = useNavigate();

    function handleSubmit(e){
      e.preventDefault()
      const user = {
          username: username,
          password
      }

      fetch(`/login`,{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => {
        if(res.ok){
          res.json()
          .then(user=>{
            setUser(user)
            setIsAuthenticated(true);
            history("/");
          })
          
        } else {
          res.json()
          .then(json => setError(json.error))
        }
        
      })
    }



  return (
    <form onSubmit={handleSubmit} className="container">
      <h1 style={{color: "#87AB88"}}>Login</h1>
      <div className='row'>
        <div className='six columns'>
          <label for="username" style={{color: "#87AB88"}}>Your Username</label>
          <input id="username" className="u-full-width" type="text" placeholder="Bobbyboi123" value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>
        <div className='six columns'>
          <label for="email" style={{color: "#87AB88"}}>Your Email</label>
          <input id="email" className="u-full-width" type="password" placeholder="test@mailbox.com" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
      </div>
      <br></br>
      <input type="submit" value="login" className='button button-first'/>
      
      {/* if there is error, it will be displayed, other wise do null */}
      {error?<h5 style={{color: "#E13914"}}>{error}</h5>:null}
    </form>
  
)
}

export default LoginForm;