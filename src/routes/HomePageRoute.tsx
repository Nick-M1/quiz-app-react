import {startMultipleChoiceQuiz} from "../logic/multiple-choice-quiz";
import {useNavigate} from "react-router-dom";

export function Component() {
    const navigate = useNavigate()

    function startMultipleChoiceQuizHandler() {
        startMultipleChoiceQuiz()
        navigate('/multiple-choice-quiz')
    }

    return (
        <div className='pt-10'>
            <button onClick={startMultipleChoiceQuizHandler} className='button-pink px-8 mx-auto'>
                Start Multiple Choice Quiz
            </button>
        </div>
    )
}