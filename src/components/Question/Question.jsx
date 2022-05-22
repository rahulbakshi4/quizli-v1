import "./question.css"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useQuizData } from "../../context/quiz-context"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
import { Loader } from "../Loader/Loader"
export const Question = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { quizData, setQuizData, userInput, setUserInput,score,setScore } = useQuizData()
    const [quesIndex, setQuesIndex] = useState(0)
    const [isSelected, setIsSelected] = useState(false)
    const [loading,setLoading] = useState(false)

    useEffect(() => {
        const getDocByID = async (id) => {
            try {
                setLoading(true)
                const res = await getDoc(doc(db, 'quizzes', id))
                if (res.exists()) {
                    setQuizData(res.data())
                    setLoading(false)
                }
            } catch (error) {
                console.log(error)
            }
        }
        getDocByID(id)
    }, [id])

    const clickHandler = (option) =>{
        setUserInput([...userInput, option])
        setIsSelected(true)
        option===quizData.questions[quesIndex].answer ? setScore((score)=>score+10) : setScore(score)   }
    return (
          <main>
          {loading ? <Loader/> :
            <section className="question-section">
                <div className="question-container">
                    <div>
                        <p className="text-xl">{quizData.questions?.[quesIndex].question}</p>
                    </div>

                    <div className="option-container">
                        {quizData.questions?.[quesIndex].options.map((option, index) =>
                            <button key={index}
                                value={option}
                                onClick={() => {clickHandler(option)}}
                                disabled={isSelected && userInput[quesIndex] !== option}
                                className={`${(isSelected && userInput[quesIndex] !== option) ?
                                    "btn bg-gray text-dark" : "btn outlined"}`}>
                                {option}</button>)}
                    </div>
                    <div className="question-footer">
                        <div className="timer">
                            <span className="material-icons-outlined md-18">timer</span>
                            <span className="fw-semibold">0:59</span>
                        </div>
                        <button className="btn icon-text-btn">
                            {quesIndex < quizData.questions?.length - 1 ?
                                <span className="text-white decoration-none" onClick={() => {
                                    setQuesIndex((quesIndex) => quesIndex + 1);
                                    setIsSelected(false)
                                }}>Next</span> :
                                <span onClick={()=>{navigate(`/result/${id}`);
                                localStorage.setItem('userScore',score)}} className="text-white decoration-none">See Result</span>}
                            <span className="material-icons md-18">east</span>
                        </button>

                    </div>
                </div>
            </section>}
        </main>
    )
}
