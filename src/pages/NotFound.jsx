import { useNavigate } from "react-router-dom"
export const NotFound = () => {
    const navigate = useNavigate()
    return (
        <section className="hero-section">
            <div className="content-container">
                <h2 className="fw-semibold text-4xl">404 </h2>
                <p className=" text-large">The page you are looking for seems to be lost in the cosmos. We tried but couldn't find the page.</p>
                <div className="btn-container">
                    <button onClick={() => navigate("/")} className="btn">Back To Home</button>
                </div>

            </div>
            <div className="hero-image-container">
                <img className="hero-img"
                    src="https://res.cloudinary.com/rahulb4/image/upload/v1653320385/space.png"
                    alt="illustration showing space" />
            </div>
        </section>
    )
}
