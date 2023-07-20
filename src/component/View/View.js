import React,{useContext, useEffect, useState} from 'react';
import './View.css';
import PostContext from '../../store/PostContext';
import FirebaseContext from '../../store/FirebaseContext';
function View() {
  const [userDetails, setUserDetails] = useState(null)
  const {postDetails} = useContext(PostContext)
  const {db} = useContext(FirebaseContext)
  useEffect(() => {
    const {userId} = postDetails
    db.collection('users').where('id','==',userId).get().then((res) => {
      console.log(res)
      res.forEach(doc => {
        setUserDetails(doc.data())
        console.log(doc.data())
      });
    })
  },[])
  return (
         <div className="viewParentDiv">
          <div className="imageShowDiv">
            <img
              src={postDetails.url}
              alt=""
            />
          </div>
          <div className="rightSection">
            <div className="productDetails">
              <p>&#x20B9; {postDetails.price } </p>
              <span>{ postDetails.name }</span>
              <p>{ postDetails.category }</p>
              <span>{postDetails.createdAt}</span>
            </div>    

           {userDetails && <div className="contactDetails">
          <p>{   userDetails.username}</p>
          <p>No name</p>
          <p>{ userDetails.phone}</p>
         </div>}


        
       </div>
    
    </div>
  );
}
export default View