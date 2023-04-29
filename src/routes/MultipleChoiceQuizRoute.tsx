import {Navigate} from "react-router-dom";
import {LOCALSTORAGE_MULTIPLECHOICEQUIZ_QUESTIONS} from "../constants/localstorage-constants";
import useMultipleChoiceGamestate from "../hooks/use-multiple-choice-gamestate";
import MultipleChoiceQuizRound from "../components/multiple-choice-quiz/MultipleChoiceQuizRound";
import {MULTIPLECHOICEQUIZ_NUMBER_OF_QUESTIONS} from "../constants/game-constants";
import MultipleChoiceQuizFinished from "../components/multiple-choice-quiz/MultipleChoiceQuizFinished";

export function Component() {
    const questions: number[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_MULTIPLECHOICEQUIZ_QUESTIONS) || '[]')
    const gamestateHook = useMultipleChoiceGamestate()

    if (gamestateHook == null || questions.length === 0)
        return <Navigate to='/'/>

    if (gamestateHook[0].currentQuestionIndex === MULTIPLECHOICEQUIZ_NUMBER_OF_QUESTIONS)
        return <MultipleChoiceQuizFinished gamestate={gamestateHook[0]} previousQuestionHandler={gamestateHook[5]}/>

    return <MultipleChoiceQuizRound questions={questions} gamestateHook={gamestateHook}/>
}