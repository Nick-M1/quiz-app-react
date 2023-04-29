import {MULTIPLECHOICEQUIZ_NUMBER_OF_QUESTIONS} from "../../constants/game-constants";
import {GAMEOVER_GIF} from "../../constants/assets-constants";
import {Link} from "react-router-dom";

type Props = {
    gamestate: GameState
    previousQuestionHandler: () => void
}

export default function MultipleChoiceQuizFinished({ gamestate, previousQuestionHandler }: Props) {
    return (
        <div className='text-white text-center'>
            <h3 className='p-6 font-bold text-3xl'>Quiz Finished</h3>
            <p className='p-4 font-bold text-xl'>Final Score: {gamestate.score}</p>
            <p className='text-[#9F50AC] font-bold pb-2 text-[14px]'>
                Total number of questions: {MULTIPLECHOICEQUIZ_NUMBER_OF_QUESTIONS}
            </p>

            <img src={GAMEOVER_GIF} alt='quiz-over' title='Quiz Finished - Welldone!!' className='mx-auto max-w-sm max-h-[31.7dvh]'/>

            <div className='flex justify-between mt-16'>
                <button onClick={previousQuestionHandler} className='button-indigo'>Prev</button>
                <Link to='/' className='button-indigo'>Finish</Link>
            </div>
        </div>
    )
}