import { createContext, useContext, useState } from "react"
const QuizContext = createContext()

const QuizProvider = ({children}) => {
  const [quizData,setQuizData] = useState({})
  const [userInput,setUserInput] = useState([])
  const [score,setScore] = useState(0)
    return <QuizContext.Provider value={{quizData,setQuizData,userInput,setUserInput,score,setScore}}>{children}</QuizContext.Provider>
}
const useQuizData = () => useContext(QuizContext)
export { useQuizData, QuizProvider }
