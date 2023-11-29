import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../../firebase.config";
import axios from "axios";
export const authContext = createContext()


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState('')
    const [loading, setLoading] = useState(true)

    const Register = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const Login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const Logout = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if (currentUser) {
                const userInfo = { email: currentUser.email }
                axios.post('http://localhost:5000/jwt', userInfo)
                    .then(res => {
                        if (res.data.token) {

                            localStorage.setItem('access-token', res.data.token);
                            setLoading(false)
                        }
                    })
            } else {
                localStorage.removeItem('access-token')
                setLoading(false)
            }
            setLoading(false)
        })
        return () => unSubscribe
    }, [])



    const authInfo = {
        user,
        loading,
        Register,
        Login,
        Logout,
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider