
import React, { useState, useContext} from 'react';
import './Login.css';
import FirebaseContext from '../../store/FirebaseContext';
import {useNavigate} from 'react-router-dom'
function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {auth, db} = useContext(FirebaseContext)
  const navigate = useNavigate()
  const handleLogin =(e) => {
    e.preventDefault()
    auth.signInWithEmailAndPassword(email, password).then((userCredential) => {
      navigate('/')
    }).catch((error) => {
      alert(error.message)
    })
  }
  return (
    <div className='mainParentdiv'>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/OLX-Logo.png/800px-OLX-Logo.png"></img>
        <form>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            defaultValue="John"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            defaultValue="Doe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button onClick={handleLogin}>Login</button>
        </form>
        <a onClick={() => {
          navigate('/signup')
        }}>Signup</a>
      </div>
    </div>
  );
}

export default Login;