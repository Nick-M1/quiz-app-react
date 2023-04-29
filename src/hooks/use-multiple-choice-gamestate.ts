import {useState} from "react";
import {
    getGamestate,
    getPreviousAnswers,
    updateGamestateWithAnswer, updateGamestateWithNewQuestion,
    updateGamestateWithPreviouslyAnsweredQuestion
} from "../logic/multiple-choice-quiz";

export default function useMultipleChoiceGamestate() {
    const [gamestate, setGamestate] = useState(getGamestate())

    if (gamestate === null)
        return null

    const isAtCurrentQuestion = getPreviousAnswers().length > gamestate.currentQuestionIndex + 1
    const nextButtonDisabled = gamestate.userAnswer === null
    const prevButtonDisabled = gamestate.currentQuestionIndex < 1

    const answerOnclickHandler = (selectedAnswerIndex: number, isCorrect: boolean) => {
        if (gamestate.userAnswer !== null)
            return

        setGamestate(prevState => {
            return prevState == null ? prevState : { ...prevState, userAnswer: selectedAnswerIndex }
        })
        updateGamestateWithAnswer(gamestate?.currentQuestionIndex!, selectedAnswerIndex, isCorrect)
        setGamestate(getGamestate())
    }

    const nextQuestionHandler = () => {
        isAtCurrentQuestion
            ? updateGamestateWithPreviouslyAnsweredQuestion(1)
            : updateGamestateWithNewQuestion()

        setGamestate(getGamestate())
    }

    const previousQuestionHandler = () => {
        updateGamestateWithPreviouslyAnsweredQuestion(-1)
        setGamestate(getGamestate())
    }

    return [gamestate, nextButtonDisabled, prevButtonDisabled, answerOnclickHandler, nextQuestionHandler, previousQuestionHandler] as const
}