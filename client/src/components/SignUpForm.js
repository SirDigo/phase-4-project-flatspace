import React, {useState} from "react";

function SignUpForm({setUser, setIsAuthenticated}) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])

    function onSubmit(e){
      e.preventDefault()
      const user = {
        username: username,
        password
    }

    fetch(`/users`,{
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
          .then(json => setErrors(json.errors))
       }
    })
  }
  return (
  <> 
  <h1>Sign UP</h1>
  <form onSubmit={onSubmit}>
  <label>
    Username

    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
  </label>
  <label>
   Email

  <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
  </label>
  <label>
   Password

  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
  </label>
 
  <input type="submit" value="Sign up" />
  </form>
  {/* in case of error, it will get the first index of the array of errors, and display the error name; and get the second index and display the value */}
  {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}
  </>
  )
}

export default SignUpForm;