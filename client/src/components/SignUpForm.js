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
      <form onSubmit={onSubmit} className="container">
        <h1 style={{color: "#87AB88"}}>Sign Up</h1>
        <div className='row'>
          <div className='four columns'>
            <label for="username" style={{color: "#87AB88"}}>New Username</label>
            <input id="username" className="u-full-width" type="text" placeholder="Bobbyboi123" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className='four columns'>
            <label for="email" style={{color: "#87AB88"}}>New Email</label>
            <input id="email" className="u-full-width" type="text" placeholder="test@mailbox.com" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='four columns'>
            <label for="password" style={{color: "#87AB88"}}>New Password</label>
            <input id="password" className="u-full-width" type="password" placeholder="password123" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <br></br>
        <input type="submit" value="sign up" className="button button-first"/>
      </form>
  )
}

export default SignUpForm;