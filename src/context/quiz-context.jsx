import { createContext, useContext, useState } from "react"
const QuizContext = createContext()

const QuizProvider = ({children}) => {
  const [quizData,setQuizData] = useState({})
  const [userInput,setUserInput] = useState([])
 
    return <QuizContext.Provider value={{quizData,setQuizData,userInput,setUserInput}}>{children}</QuizContext.Provider>
}
const useQuizData = () => useContext(QuizContext)
export { useQuizData, QuizProvider }
