import "./question.css"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { useQuizData } from "../../context/quiz-context"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../firebase"
import { Loader } from "../Loader/Loader"
import toast from "react-hot-toast"
export const Question = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { quizData, setQuizData, userInput, setUserInput,score,setScore } = useQuizData()
    const [quesIndex, setQuesIndex] = useState(0)
    const [isSelected, setIsSelected] = useState(false)
    const [loading,setLoading] = useState(false)
    const [timer,setTimer] = useState(30)
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
                toast.error('Something Went Wrong!',{duration: 1500, position: 'bottom-center'})
            }
        }
        getDocByID(id)
    }, [id])

    useEffect(() => {
        const countDown = () => {
            setTimer(timer => timer - 1)
            if(timer === 0){
               if(!(quesIndex < quizData.questions?.length - 1)){
                seeResult()
               }
               else{
                nextQuestion()}
            }
        }
        const ticking = setInterval(countDown,1000)
        return () => {
            clearInterval(ticking)
        }

    } ,[timer,quesIndex])

    const nextQuestion = () => {
        isSelected ===false && setUserInput((userInput)=>[...userInput,null ])
        setQuesIndex((quesIndex) => quesIndex + 1);
        setIsSelected(false);
        setTimer(30)
    }
    const seeResult = () => {
        navigate(`/result/${id}`);
        localStorage.setItem('userScore',score)
        localStorage.setItem('userInput',JSON.stringify(userInput))
    }

    const clickHandler = (option) =>{
        setIsSelected(true)
        setUserInput((userInput)=>[...userInput, option])
        option===quizData.questions[quesIndex].answer ? setScore((score)=>score+10) : setScore(score)   
    }
    const quitHandler = () => {
        toast.loading('Leaving Quiz',{duration: 800})
        setScore(0)
        setUserInput([])
        localStorage.removeItem('userInput')
        setTimeout(() => {
            navigate("/categories")
            toast.success('Quiz Data Cleared',{duration: 800})
        }, 1000); 
    }
    return (
          <main>
          {loading ? <Loader/> :
            <section className="question-section">
                <div className="question-container">
                <div class="timer">
                        <span className="material-icons-outlined md-18">timer</span>
                        <span className="fw-semibold">0:{timer<10?`0${timer}`:timer}</span>
                    </div>
                    <div>
                        <p className="text-xl">{quizData.questions?.[quesIndex].question}</p>
                    </div>

                    <div className="option-container">
                        {quizData.questions?.[quesIndex].options.map((option, index) =>
                            <button key={index}
                                value={option}
                                onClick={() => {clickHandler(option)}}
                                disabled={isSelected }
                                className={`${(isSelected && userInput[quesIndex] !== option) ?
                                    "btn bg-gray text-dark cursor-disable" : (isSelected && userInput[quesIndex] ===option) ? "btn" : "btn outlined"}`}>
                                {option}</button>)}
                    </div>
                    <div className="question-footer">
                        <button className="quit-quiz btn outlined" onClick={()=>{quitHandler()}}>
                           <span className="material-icons-outlined">cancel</span>
                           <span className="fw-semibold">Quit</span>
                        </button>


                        {quesIndex < quizData.questions?.length - 1 && 
                            <button className='btn text-white icon-text-btn'  onClick={() => nextQuestion()}>
                            <span className="decoration-none" >Next</span>
                            <span className="material-icons md-18">east</span>
                            </button>
                        }
                        {!(quesIndex < quizData.questions?.length - 1) && 
                            <button className="btn icon-text-btn" onClick={()=>seeResult()} >
                            <span className="text-white decoration-none">See Result</span>
                            <span className="material-icons md-18">east</span>
                        </button>}
                    </div>
                </div>
            </section>}
        </main>
    )
}
