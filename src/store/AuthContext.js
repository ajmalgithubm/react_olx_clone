import { createContext , useState} from "react";
const AuthContext = createContext(null)
export const  AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    return(
        <AuthContext.Provider value= {{user,setUser}}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthContext