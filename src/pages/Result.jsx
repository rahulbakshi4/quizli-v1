import { useNavigate, useParams } from "react-router-dom"
import { useQuizData } from "../context/quiz-context"
import { useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebase"
export const Result = () => {

  const navigate = useNavigate()
  const { id } = useParams()
  const { quizData, setQuizData, userInput, score, setUserInput, setScore } = useQuizData()

  useEffect(() => {
    const getDocByID = async (id) => {
      try {
        const res = await getDoc(doc(db, 'quizzes', id))
        if (res.exists()) {
          setQuizData(res.data())
        }
      } catch (error) {
        console.log(error)
      }
    }
    getDocByID(id)
  }, [id])

  const clickHandler = () => {
    setScore(0)
    setUserInput([])
    navigate("/categories")
  }

  return (
    <main className="result-container">
      <section className="result-head">
        <div className="result-title">
          <h1 className="text-2xl fw-bold text-center">Quiz Summary</h1>
        </div>
        <div className="score-details">
          <h3 className="text-xl fw-semibold">{`Your score is ${localStorage.getItem("userScore")}/50`}</h3>
          <button className="btn" onClick={clickHandler}>Play Again</button>
        </div>
      </section>
      {quizData?.questions?.map(({ question, options, answer }, index) => {
        return (
          <section className="result-content">
            <div className="question-container">
              <div>
                <p>{question}</p>
              </div>
              <div className="result-options">
                {options.map((option) => <span className={`btn text-center ${option === answer ? "btn-success" : "btn-danger"}`}>{option}</span>)
                }
              </div>
              <p className="fw-semibold text-right">{`${userInput[index] === answer ? 10 : 0} Points awarded`}</p>
            </div>
          </section>

        )
      })}
    </main>
  )
}
