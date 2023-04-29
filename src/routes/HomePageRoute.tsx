import {startMultipleChoiceQuiz} from "../logic/quiz-setup";
import {useNavigate} from "react-router-dom";
import {MULTIPLE_CHOICE_QUESTIONS_LENGTH} from "../questions/multiple-choice-questions";
import {CASESTUDY_QUESTIONS_LENGTH} from "../questions/multiple-choice-casestudy-questions";

export function Component() {
    const navigate = useNavigate()

    function startMultipleChoiceQuizHandler<T>(urlPath: string, questionsLength: number) {
        startMultipleChoiceQuiz(questionsLength)
        navigate(`/quiz/` + urlPath)
    }

    return (
        <div className='pt-20 space-y-6'>
            <button onClick={() => startMultipleChoiceQuizHandler('multiple-choice-quiz', MULTIPLE_CHOICE_QUESTIONS_LENGTH)} className='button-pink px-8 mx-auto'>
                Start Multiple Choice Quiz
            </button>

            <button onClick={() => startMultipleChoiceQuizHandler('casestudy-quiz', CASESTUDY_QUESTIONS_LENGTH)} className='button-lime px-8 mx-auto'>
                Start Case-study Quiz
            </button>
        </div>
    )
}