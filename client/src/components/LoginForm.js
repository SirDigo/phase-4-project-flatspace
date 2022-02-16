import React, {useState} from 'react'

import SignUpForm from './SignUpForm'



function LoginForm({setUser,setIsAuthenticated}) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState([])

    function onSubmit(e){
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
            setIsAuthenticated(true)
          })
          
        } else {
          res.json()
          .then(json => setError(json.error))
        }
      })
  }



  return (
      
    <> 
    <h1>login</h1>
    <form onSubmit={onSubmit}>
    {/* <label> */}
      <input className="login-input" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
    {/* </label> */}
    {/* <label> */}
    <input className="login-input" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
    {/* </label> */}
   
    <input type="submit" value="login" />
  </form>
  {/* if there is error, it will be displayed, other wise do null */}
  {error?<div>{error}</div>:null}
  <SignUpForm setUser={setUser} setIsAuthenticated={setIsAuthenticated}/>
    </>
)
}

export default LoginForm;