import { Link } from "react-router-dom"
import "../styles/home.css"
export const Home = () => {
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
                    <button className="buttons btn fw-bold">
                        <Link to="/" className="text-white">Test Yourself</Link>
                    </button>
                    <button className="buttons hero-btn-outline fw-bold">
                        <Link to="/categories" className="text-dark">See Categories</Link>
                    </button>
                </div>

            </div>

        </section>
    </main>

  )
}
