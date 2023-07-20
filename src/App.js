import './App.css';
import Home from './Pages/Home';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import SignupPage from './Pages/Signup'
import LoginPage from './Pages/Login';
import { useEffect , useContext} from 'react';
import FirebaseContext from './store/FirebaseContext';
import AuthContext from './store/AuthContext';
import CreatePage from './Pages/Create';
import { Post } from './store/PostContext';
import ViewPost from './Pages/ViewPost';

function App() {
  const {user,setUser} = useContext(AuthContext)
  const {auth, db} = useContext(FirebaseContext)
  useEffect(()=>{
    auth.onAuthStateChanged((user) =>{
      setUser(user)
      console.log(user)
    })
  })
  return (
  <div className="App">
    <BrowserRouter>
      <Post>
       <Routes>
         <Route exact path='/' element={<Home/>}/>
         <Route  path='/signup' element={<SignupPage/>}/>
         <Route  path='/login' element={<LoginPage/>}/>
         <Route path='/create' element={<CreatePage/>} />
         <Route path='/view' element={<ViewPost/>} />
       </Routes>
      </Post>
    </BrowserRouter>
        
  </div>
  );
}

export default App;
