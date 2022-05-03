import "../styles/auth.css"
import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react"
import { useAuth } from "../context/auth-context"
export const Signup = () => {
 const {auth, signup,updateProfile } = useAuth()
 const  navigate = useNavigate()
 const nameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()

  const signupHandler = async (e) =>{
    e.preventDefault()
      try{
          const res = await signup(emailRef.current.value,passwordRef.current.value)
          if(res){
            await updateProfile(auth.currentUser, { displayName: nameRef.current.value })
              navigate('/login')
          }
      }
      catch(err){
          console.log("error",err)
      }
  } 
  return (
    <main>
    <div className="form-container">
        <h1 className="text-2xl fw-xbold text-center">Sign Up Here</h1>

        <form onSubmit={signupHandler}>
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
                    <input  type="email" name="email" placeholder="test.js@gmail.com" ref={emailRef} required />
                </div>
            </div>

            <div className="form-content">
                <div className="label-container">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input  type="password" name="password" placeholder="*********" ref={passwordRef} required />
                </div>
            </div>

            <div className="form-content">
                <div className="label-container">
                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input type="password" name="confirmpassword" placeholder="*********"  ref={passwordConfirmRef} required />
                </div>
            </div>

            {/* {error && <div className="form-content"><div className="label-container"><Alert message={"Passwords did not match"} variant={'error'} /></div> </div>} */}

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
