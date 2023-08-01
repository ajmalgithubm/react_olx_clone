import React, {useContext} from 'react';

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import AuthContext from '../../store/AuthContext';
import FirebaseContext from '../../store/FirebaseContext';
import { useNavigate } from 'react-router-dom';
function Header() {
  const {user, setUser} = useContext(AuthContext)
  const {auth, db} = useContext(FirebaseContext)
  const navigate = useNavigate()
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span style={{cursor:'pointer'}} onClick={() => navigate('/login')}>{user ? `welcome ${user.displayName}`: 'Login'}</span>
          <hr />
        </div>
        {user && <span><button onClick={() => {
          auth.signOut().then(() => {
            navigate('/login')
          }).catch((error) => {
            console.error("Error signing out:", error);
          });
          
        }} style={{cursor:"pointer"}}>Logout</button></span>}

        <div className="sellMenu" onClick={() => navigate('/create')}>
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;