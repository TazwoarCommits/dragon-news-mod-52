import PropTypes from "prop-types";
import { createContext, useState } from "react";
import { app } from "../tailwind.init";
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
     const [user,setUser] = useState(null);

     const createNewUser = (email, password) =>{
      return createUserWithEmailAndPassword(auth , email , password) ;
     }  

    const authInfo = {
        user,
        setUser,
        createNewUser,
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children : PropTypes.object,
}
export default AuthProvider;