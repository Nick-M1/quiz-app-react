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

    const hasCasestudyText = typeof question.casestudyText !== 'undefined'

    return (
        <div className={hasCasestudyText ? 'grid md:grid-cols-2 gap-9' : ''}>
            { hasCasestudyText && (
                <div className='text-left bg-white/10 p-3 rounded-lg border border-neutral-500 text-neutral-200'>
                    { question.casestudyText }
                </div>
            )}



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
        </div>
    );
};