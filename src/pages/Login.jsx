import "../styles/auth.css"
import { Link } from "react-router-dom"
export const Login = () => {
  return (
    <main>
            <div className="form-container">
                <h1 className="text-2xl fw-xbold text-center">Log In Here</h1>
                <form>
                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="email">
                                Email
                            </label>
                            <input type="email" name="email" placeholder="test.js@gmail.com" required />
                        </div>
                    </div>

                    <div className="form-content">
                        <div className="label-container">
                            <label htmlFor="password">
                                Password
                            </label>
                            <input type="password" name="password" placeholder="*********" required ></input>
                        </div>
                    </div>
                    {/* {error && <div className="form-content">
                        <div className="label-container">
                            <Alert message={"Invalid Email or Password"} variant={'error'} />
                        </div>
                    </div>} */}
                    <div className="form-content">
                        <button type="submit" className="form-btn bg-dark">
                            Login
                        </button>
                    </div>
                    <div className="form-content">
                        <button
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
