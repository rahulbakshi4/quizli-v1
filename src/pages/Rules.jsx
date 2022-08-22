import { useLocation, useNavigate } from "react-router-dom"
import "../styles/rules.css"
export const Rules = () => {
    const navigate = useNavigate()
    const location = useLocation()
  return (
    <main>
        <section className="rules-section">
            <div className="component-container items-col">
                <div className="rules-head">
                    <h2 className="text-xl fw-semibold">Rules</h2>
                </div>
                <ul className="text-large">
                   
                    <li>
                        <span className="fw-bold">Rule 1:</span> On each correct answer 10
                        points are awarded to the player
                    </li>
                    <li>
                        <span className="fw-bold">Rule 2:</span> No points will be deducted on
                        wrong answers.
                    </li>
                    <li>
                        <span className="fw-bold">Rule 3:</span> Each question has 3 choices
                        with only one correct choice.
                    </li>
                </ul>
                <button className="btn rule-btn fw-semibold" onClick={()=>navigate('/quiz/'+location.state.id ,{replace:true})}><span className="text-white decoration-none">Start Quiz</span></button>
            </div>
        </section>
    </main>
  )
}
