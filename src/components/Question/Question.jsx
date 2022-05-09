import "./question.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useQuizData } from "../../context/quiz-context"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
export const Question = () => {
    const { id } = useParams()
    const { quizData, setQuizData, userInput, setUserInput } = useQuizData()
    const [quesIndex, setQuesIndex] = useState(0)
    const [isSelected, setIsSelected] = useState(false)

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

    return (
        <main>
            <section className="question-section">
                <div className="question-container">
                    <div>
                        <p className="text-xl">{quizData.questions?.[quesIndex].question}</p>
                    </div>

                    <div className="option-container">
                        {quizData.questions?.[quesIndex].options.map((option, index) =>
                            <button key={index}
                                value={option}
                                onClick={() => { setUserInput([...userInput, option]); setIsSelected(true) }}
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
                                <span className="text-white decoration-none">See Result</span>}
                            <span className="material-icons md-18">east</span>
                        </button>

                    </div>
                </div>
            </section>
        </main>
    )
}
