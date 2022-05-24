import { Link } from "react-router-dom"
import { useAuth } from "../context/auth-context"
import "../styles/home.css"
import toast from "react-hot-toast"
export const Home = () => {
    const { user } = useAuth()
    return (
        <main>
            <section className="hero-section">
                <div className="hero-image-container">
                    <img className="hero-img" src="https://res.cloudinary.com/rahulb4/image/upload/v1645203452/07_nkjura.png"
                        alt="hero image" />
                </div>
                <div className="content-container">
                    <h2 className="text-3xl fw-xbold">Put those brain cells to the test</h2>
                    <p className="text-large">Quizli brings you a set of quizzes to try out your knowledge of various different
                        domains and test how much you really know.</p>
                    <div className="btn-container">
                        <button className="buttons btn fw-bold" onClick={() => !user.token && toast('Log in to continue !', { duration: 1500, position: 'bottom-center' })}>
                            <Link to={user.token ? "/categories" : "/login"} className="text-white">Test Yourself</Link>
                        </button>
                        <button className="buttons hero-btn-outline fw-bold">
                            <a href="https://github.com/rahulbakshi4/quizli-v1" target="_blank" rel="noopener" className="text-dark">Github</a>
                        </button>

                    </div>

                </div>

            </section>
        </main>

    )
}
