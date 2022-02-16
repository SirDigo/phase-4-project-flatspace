import React, {useState} from "react";

function SignUpForm({setUser, setIsAuthenticated}) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState([])
  // const [passwordConfirmation, setPasswordConfirmation] = useState('')

  function onSubmit(e){
    e.preventDefault()
    const user = {
        username: username,
        email,
        password
    }
    fetch(`/signup`,{
      method:'POST',
      headers:{'Content-Type': 'application/json'},
      body:JSON.stringify(user)
    })
    .then(res => {
      if(res.ok){
        res.json()
        .then(user=> {
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
      <h1>sign up</h1>
      <form onSubmit={onSubmit}>
      {/* <label> */}
        <input className="signup-input" type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} />
        {/* </label>
       <label> */}
       <input className="signup-input" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
       {/* </label>
       <label> */}
       <input className="signup-input" type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {/* </label> */}

  {/* <label>
   Password Confirmation

  <input type="password" value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
  </label>
  */}
        <input type="submit" value="sign up" />
        </form>
      {/* in case of error, it will get the first index of the array of errors, and display the error name; and get the second index and display the value */}
      {errors?errors.map(e => <div>{e[0]+': ' + e[1]}</div>):null}

     </>
  )
}

export default SignUpForm;