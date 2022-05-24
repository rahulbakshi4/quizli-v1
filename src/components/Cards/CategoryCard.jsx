import { Link } from "react-router-dom"
import { useQuizData } from "../../context/quiz-context"
import "./card.css"
export const CategoryCard = ({_id,category,imageURL,description}) => {
    const {setUserInput, setScore } = useQuizData()
    const clickHandler = () =>{
        setScore(0)
        setUserInput([])
        localStorage.removeItem('userInput')
    }
  return (
    
        <div className="card">
            <div className="card-body">
                <img className="card-img"
                    src={imageURL}
                    alt={`image representing ${category} category`} />
                <div className="card-heading">
                    <h2>{category}</h2>
                    <p className="text-sm">5 Questions</p>
                </div>
                <div className="text-sm card-desc">
                    <p>
                       {description}
                    </p>
                    <div className="play-btn-container">
                        <button className="btn" onClick={()=>clickHandler()}><Link to='/rules' state={{id:_id}} className="text-white decoration-none">Play Now</Link></button>
                    </div>
                </div>
            </div>
        </div>
     
  )
}
