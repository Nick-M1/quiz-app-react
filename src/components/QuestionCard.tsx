import {getButtonColor} from "../logic/button-color";

type Props = {
    question: MultipleChoiceQuestion;
    userAnswer: number | null;
    onClick: (currentQuestionIndex: number, isCorrect: boolean) => void;
};

export default function QuestionCard({
   question,
   userAnswer,
   onClick,
}: Props) {

    return (
        <div>
            <p className='text-[20px] max-w-[400px]'>{ question.questionText }</p>
            <div className='flex flex-col items-center pt-8'>
                { question.answers.map((answer, answerIndex) => (
                    <button
                        key={answer}
                        onClick={() => onClick(answerIndex, answerIndex === question.correctAnswer)}
                        className={`${getButtonColor(
                            userAnswer,
                            question.correctAnswer,
                            answerIndex
                        )} smooth-transition flex items-center justify-center select-none font-bold min-h-[45px] max-w-[400] w-full my-2 rounded-[10px]`}
                    >
                        <span className='truncate'>{ answer }</span>
                    </button>
                ))}
            </div>
        </div>
    );
};