import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut ,updateProfile } from 'firebase/auth'
import { createContext, useContext, useState, useEffect } from 'react'
import { auth } from '../firebase'
const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState({
        token: '', userID: '', displayName: '',email: ''
    })
    useEffect(() => {
        const {token,userID,displayName,email} = JSON.parse(localStorage.getItem("userInfo")) || ''

        token && userID ? setUser({ token, userID,displayName,email }) : setUser({ token: '', userID : '',displayName: '',email: '' })

    }, [])

    const signup = (email, password) => createUserWithEmailAndPassword(auth, email, password)

    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    const logout = () => signOut(auth)

    return (<AuthContext.Provider value={{ auth, user, setUser, signup, login, logout,updateProfile }}>
        {children}
    </AuthContext.Provider>)
}
const useAuth = () => useContext(AuthContext)

export { useAuth, AuthProvider }
