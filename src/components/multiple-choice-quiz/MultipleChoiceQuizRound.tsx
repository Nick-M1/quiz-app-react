import {MULTIPLECHOICEQUIZ_NUMBER_OF_QUESTIONS} from "../../constants/game-constants";
import QuestionCard from "../QuestionCard";
import {MULTIPLE_CHOICE_QUESTIONS} from "../../questions/multiple-choice-questions";
import useMultipleChoiceGamestate from "../../hooks/use-multiple-choice-gamestate";

type Props = {
    questions: number[]
    gamestateHook: Exclude<ReturnType<typeof useMultipleChoiceGamestate>, null>
}

export default function MultipleChoiceQuizRound({ questions, gamestateHook }: Props) {
    const [
        gamestate,
        nextButtonDisabled,
        prevButtonDisabled,
        answerOnclickHandler,
        nextQuestionHandler,
        previousQuestionHandler
    ] = gamestateHook

    return (
        <div className='text-white text-center md:px-12 lg:px-32'>
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
                <button onClick={previousQuestionHandler} disabled={prevButtonDisabled} className={`button-indigo px-8 font-quicksand-bold ${prevButtonDisabled && 'cursor-not-allowed'}`}>Prev</button>
                <button onClick={nextQuestionHandler} disabled={nextButtonDisabled} className={`button-indigo px-8 font-quicksand-bold ${nextButtonDisabled && 'cursor-not-allowed'}`}>Next</button>
            </div>
        </div>
    );
}