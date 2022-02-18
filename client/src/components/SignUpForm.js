import React, {useState} from "react";

function SignUpForm({ handleSignUp }) {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function onSubmit(e){
    e.preventDefault()
    const user = {
        username: username,
        email,
        password
    }
    handleSignUp(user)
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

     </>
  )
}

export default SignUpForm;