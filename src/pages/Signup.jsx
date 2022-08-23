import "../styles/auth.css"
import { Link, useNavigate } from "react-router-dom"
import { useRef, useState } from "react"
import { useAuth } from "../context/auth-context"
import toast from 'react-hot-toast';
import { Alert } from "../components";
export const Signup = () => {
    const { auth, signup, updateProfile } = useAuth()
    const navigate = useNavigate()
    const nameRef = useRef()
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState({
        state: false,
        message: ''
    })

    const signupHandler = async (e) => {
        e.preventDefault()
        try {
            if(passwordRef.current.value === passwordConfirmRef.current.value){
            const res = await signup(emailRef.current.value, passwordRef.current.value)
            if (res) {
                await updateProfile(auth.currentUser, { displayName: nameRef.current.value })
                toast.success('Signed Up Successfully!', { duration: 1500, position: 'bottom-center' });
                navigate('/login')
            }}
            else{
                setError({state: true, message: 'Passwords do not match'})
            }
        }
        catch (err) {
            setError({ state: true, message: err.message.slice(err.message.indexOf(':')+1) })
        }
    }

    return (
        <main>
            <div className="form-container">
                <h1 className="text-2xl fw-xbold text-center">Sign Up Here</h1>

                <form onSubmit={signupHandler}>
                    {error.state && <div className="form-content">
                        <div className="label-container">
                            <Alert message={error.message} variant={'error'} />
                        </div>
                    </div>}

                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" name="name" placeholder="Enter Your Name" ref={nameRef} required />
                        </div>
                    </div>
                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" name="email" placeholder="test.js@gmail.com" ref={emailRef} required />
                        </div>
                    </div>

                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input type="password" name="password" placeholder="*********" ref={passwordRef} required />
                        </div>
                    </div>

                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="confirmPassword">
                                Confirm Password
                            </label>
                            <input type="password" name="confirmpassword" placeholder="*********" ref={passwordConfirmRef} required />
                        </div>
                    </div>


                    <div className="form-content">
                        <button type="submit" className="form-btn bg-dark">
                            Sign Up
                        </button>
                    </div>

                </form>
                <div className="form-actions">
                    <p className="text-center">
                        Already have an account? <Link to="/login" className="text-dark"> Log In Here</Link>
                    </p>
                </div>
            </div>
        </main>

    )
}
