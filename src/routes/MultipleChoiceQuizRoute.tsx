import QuestionCard from "../components/QuestionCard";
import {MULTIPLE_CHOICE_QUESTIONS} from "../questions/multiple-choice-questions";
import {useEffect, useState} from "react";
import {
    getGamestate, getPreviousAnswers,
    updateGamestateWithAnswer,
    updateGamestateWithNewQuestion,
    updateGamestateWithPreviouslyAnsweredQuestion
} from "../logic/multiple-choice-quiz";
import {MULTIPLECHOICEQUIZ_NUMBER_OF_QUESTIONS} from "../constants/game-constants";
import {Navigate} from "react-router-dom";
import {LOCALSTORAGE_MULTIPLECHOICEQUIZ_QUESTIONS} from "../constants/localstorage-constants";

export function Component() {
    const questions: number[] = JSON.parse(localStorage.getItem(LOCALSTORAGE_MULTIPLECHOICEQUIZ_QUESTIONS) || '[]')

    const [gamestate, setGamestate] = useState(getGamestate())


    if (gamestate == null || questions.length === 0)
        return <Navigate to='/'/>

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

    return (
        <div className='text-white text-center'>
            <p className='p-4 font-bold text-xl'>Score: {gamestate.score}</p>
            <p className='text-[#9F50AC] font-bold pb-2 text-[14px]'>
                Question {gamestate.currentQuestionIndex + 1} out of {MULTIPLECHOICEQUIZ_NUMBER_OF_QUESTIONS}
            </p>
            <QuestionCard
                question={MULTIPLE_CHOICE_QUESTIONS[questions[gamestate.currentQuestionIndex]]}
                userAnswer={gamestate.userAnswer}
                onClick={answerOnclickHandler}
            />
            <div className='flex justify-between mt-16'>
                <button onClick={previousQuestionHandler} disabled={prevButtonDisabled} className={`button-indigo ${prevButtonDisabled && 'cursor-not-allowed'}`}>Prev</button>
                <button onClick={nextQuestionHandler} disabled={nextButtonDisabled} className={`button-indigo ${nextButtonDisabled && 'cursor-not-allowed'}`}>Next</button>
            </div>
        </div>
    );
}