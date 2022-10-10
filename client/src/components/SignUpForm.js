import React, {useState} from "react";
import { useNavigate } from 'react-router-dom';

function SignUpForm({setUser, setIsAuthenticated}) {
  const [errors, setErrors] = useState([])
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate();

  function onSubmit(e){
    e.preventDefault()
    const user = {
        username: username,
        email,
        password
    }
      fetch('/users', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(user)
      })
      .then(res => {
        if (res.ok) {
          res.json()
          .then(user => {
            setUser(user)
            setIsAuthenticated(true);
            navigate(`/${user.id}`);
          })
        } else {
          res.json()
          .then(json => setErrors(json.errors))
      }
      })
    
  }

  return (
      <> 
        <h1>sign up</h1>
        <form onSubmit={onSubmit}>
          <input className="signup-input" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
          <input className="signup-input" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className="signup-input" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" value="sign up" />
        </form>
        {errors ? errors.map(e => <div style={{color: "#3A553A"}}>{e[0]+': ' + e[1]}</div>) : null}
     </>
  )
}

export default SignUpForm;