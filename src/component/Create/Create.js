import React, { Fragment, useState, useContext } from 'react';
import './Create.css';
import Header from '../Header/Header';
import FirebaseContext from '../../store/FirebaseContext';
import AuthContext from '../../store/AuthContext';
import { useNavigate } from 'react-router-dom';
const Create = () => {
  const [name , setName] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] =useState(null)
  const {auth, db, storageRef} = useContext(FirebaseContext)
  const {user, setUser} = useContext(AuthContext)
  const navigator = useNavigate()
  const date = new Date()
  const handleSubmit = (e) => {
    e.preventDefault()
    storageRef.ref(`/image/${image.name}`).put(image).then(({ref}) => {
      ref.getDownloadURL().then((url) => {
        console.log(url)
        db.collection('productOlx').add({
          name,
          category,
          price,
          url,
          userId : user.uid,
          createdAt : date.toDateString()
        })
       
      })
        
    }).then(() => {
      navigator('/')
    })
    
  }
  return (
    <Fragment>
      <Header/>
      <card>
        <div className="centerDiv">
          <form>
            <label htmlFor="fname">Name</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="Name"
              value = {name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Category</label>
            <br />
            <input
              className="input"
              type="text"
              id="fname"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <br />
            <label htmlFor="fname">Price</label>
            <br />
            <input className="input" type="number" id="fname" name="Price"  value={price} onChange={(e) => setPrice(e.target.value)}/>
            <br />
          </form>
          <br />
          <img alt="Posts" width="200px" height="200px" src={image ? URL.createObjectURL(image) :''}></img>
          <form>
            <br />
            <input onChange={(e) => setImage(e.target.files[0])}  type="file" />
            <br />
            <button className="uploadBtn" onClick={handleSubmit}>upload and Submit</button>
          </form>
        </div>
      </card>
    </Fragment>
  );
};

export default Create;