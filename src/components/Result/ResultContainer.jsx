import { useEffect,useState } from "react"
import { useQuizData } from "../../context/quiz-context"
import "./result.css"
export const ResultContainer = ({ question, options, answer, quesIndex }) => {
    const {userInput,setScore} = useQuizData()
    console.log(userInput[quesIndex]===answer)
    return (
        <></>    )
}
