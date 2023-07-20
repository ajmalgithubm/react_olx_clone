import React, { useState, useContext } from 'react';
//import Logo from '../../olx-logo.png''
import './Signup.css';
import FirebaseContext from '../../store/FirebaseContext';
import {useNavigate} from 'react-router-dom'
export default function Signup() {

  const [Username, setUsername] =useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] =useState('')
  const [password, setPassword] = useState('')
  const { auth, db} = useContext(FirebaseContext)
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((userCredential) => {
      userCredential.user.updateProfile({displayName : Username})
      return userCredential.user.uid
    }).then((uid) => {
      db.collection('users').add({
        username : Username,
        phone : phoneNumber,
        id : uid
      })
    }).then(() => {
      navigate('/login')
    })
  };
  
  


  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/OLX-Logo.png/800px-OLX-Logo.png'></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={Username}
            onChange={(e) => {
                setUsername(e.target.value)
            }}
          />
          <br />
          <label >Email</label>
          <br />
          <input
            className="input"
            type="email"
            value={email}
            onChange={(e) => {
                setEmail(e.target.value)
            }}
          />
          <br />
          <label>Phone</label>
          <br />
          <input
            className="input"
            type="text"
            value={phoneNumber}
            onChange={(e) => {
                setPhoneNumber(e.target.value)
            }}
          />
          <br />
          <label>Password</label>
          <br />
          <input
            className="input"
            type="password"
            name="password"
            value={password}
            onChange={(e)=>{
                setPassword(e.target.value)
            }}
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={() => {
          navigate('/login')
        }}>Login</a>
      </div>
    </div>
  );
}