import "../styles/auth.css"
import { Link } from "react-router-dom"
export const Signup = () => {
  return (
    <main>
    <div className="form-container">
        <h1 className="text-2xl fw-xbold text-center">Sign Up Here</h1>

        <form>
            <div className="form-content">
                <div className="label-container">
                    <label htmlFor="name">
                        Name
                    </label>
                    <input type="text" name="name" placeholder="Enter Your Name" required />
                </div>
            </div>
            <div className="form-content">
                <div className="label-container">
                    <label htmlFor="email">
                        Email
                    </label>
                    <input  type="email" name="email" placeholder="test.js@gmail.com" required />
                </div>
            </div>

            <div className="form-content">
                <div className="label-container">
                    <label htmlFor="password">
                        Password
                    </label>
                    <input  type="password" name="password" placeholder="*********" required />
                </div>
            </div>

            <div className="form-content">
                <div className="label-container">
                    <label htmlFor="confirmPassword">
                        Confirm Password
                    </label>
                    <input type="password" name="confirmpassword" placeholder="*********" required />
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
