import "../styles/auth.css"
import { useState } from "react"
import { Alert } from "../components"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useAuth } from "../context/auth-context"
import toast from 'react-hot-toast';
export const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const [loggedIn, setLoggedIn] = useState({
        email: '', password: ''
    })
    const {user,setUser,login } = useAuth()
    const [error, setError] = useState(false)

    const loginHandler = async (e) => {
        e.preventDefault()
        try {
            const res = await login(loggedIn.email, loggedIn.password)
            if (res) {
                localStorage.setItem('userInfo', JSON.stringify({
                    token : res.user?.accessToken,
                    userID : res.user?.uid,
                    displayName: res.user?.displayName,
                    email: res.user?.email
                }))
                setUser({...user,token: res.user?.accessToken,userID:res.user?.uid,displayName:res.user?.displayName})
                toast.success('Logged In Successfully!',{duration: 1500, position: 'bottom-center'});
                navigate(location.state?.from?.pathname || '/categories', { replace: true })
            }
        }
        catch (err) {
            console.log("error",err)
            toast.error('Something Went Wrong!',{duration: 1500, position: 'bottom-center'})
            setError(true)
        }
    }
    return (
        <main>
            <div className="form-container">
                <h1 className="text-2xl fw-xbold text-center">Log In Here</h1>
                <form onSubmit={loginHandler}>
                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input onChange={(e) => setLoggedIn({ ...loggedIn, email: e.target.value })}
                                value={loggedIn.email} type="email" name="email" 
                                placeholder="test.js@gmail.com" required />
                        </div>
                    </div>

                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input onChange={(e) => setLoggedIn({ ...loggedIn, password: e.target.value })}
                                value={loggedIn.password} type="password" name="password"
                                placeholder="*********" required />
                        </div>
                    </div>
                    {error && <div className="form-content">
                        <div className="label-container">
                            <Alert message={"Invalid Email or Password"} variant={'error'} />
                        </div>
                    </div>} 
                    <div className="form-content">
                        <button type="submit" className="form-btn bg-dark">
                            Login
                        </button>
                    </div>
                    <div className="form-content">
                        <button onClick={() => setLoggedIn({ email: "test.js@gmail.com", password: "test123" })}
                            type="submit" className="form-btn bg-dark">
                            Login as Test User
                        </button>
                    </div>
                </form>
                <div className="form-actions">
                    <p className="text-center">Need an account? <Link to="/signup" className="text-dark">Sign Up Here</Link> </p>
                </div>
            </div>
        </main>

    )
}
