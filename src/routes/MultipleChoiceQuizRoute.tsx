import {Navigate, useParams} from "react-router-dom";
import {LOCALSTORAGE_MULTIPLECHOICEQUIZ_QUESTIONS} from "../constants/localstorage-constants";
import useMultipleChoiceGamestate from "../hooks/use-multiple-choice-gamestate";
import MultipleChoiceQuizRound from "../components/multiple-choice-quiz/MultipleChoiceQuizRound";
import {TOTAL_NUMBER_OF_QUESTIONS} from "../constants/game-constants";
import MultipleChoiceQuizFinished from "../components/multiple-choice-quiz/MultipleChoiceQuizFinished";
import {MULTIPLE_CHOICE_QUESTIONS} from "../questions/multiple-choice-questions";
import {CASESTUDY_QUESTIONS} from "../questions/multiple-choice-casestudy-questions";

function matchQuizType(quizType: string | undefined) {
    if (typeof quizType == 'undefined')
        return MULTIPLE_CHOICE_QUESTIONS

    switch (quizType) {
        case 'multiple-choice-quiz': return MULTIPLE_CHOICE_QUESTIONS
        case 'casestudy-quiz': return CASESTUDY_QUESTIONS
        default: return  MULTIPLE_CHOICE_QUESTIONS
    }
}

export function Component() {
    const { quizType } = useParams()
    const questions = matchQuizType(quizType)

    const questionsIndexes: number[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_MULTIPLECHOICEQUIZ_QUESTIONS) || '[]')
    const gamestateHook = useMultipleChoiceGamestate()

    if (gamestateHook == null || questionsIndexes.length === 0)
        return <Navigate to='/'/>

    if (gamestateHook[0].currentQuestionIndex === TOTAL_NUMBER_OF_QUESTIONS)
        return <MultipleChoiceQuizFinished gamestate={gamestateHook[0]} previousQuestionHandler={gamestateHook[5]}/>

    return <MultipleChoiceQuizRound questions={questions} questionsIndexes={questionsIndexes} gamestateHook={gamestateHook}/>
}