export function getButtonColor(userAnswer: number | null, correctAnswer: number, thisAnswerIndex: number): string {
    const hasUserChosen = userAnswer !== null;
    const isThisAnswerCorrect = hasUserChosen && thisAnswerIndex === correctAnswer

    if (isThisAnswerCorrect)
        return 'bg-green-600 text-white cursor-not-allowed';

    if (userAnswer === thisAnswerIndex)
        return 'bg-red-700 text-white cursor-not-allowed';

    if (hasUserChosen)
        return 'bg-neutral-100 text-purple-700 cursor-not-allowed';

    return 'bg-white hover:bg-neutral-200 active:bg-neutral-300 text-purple-700';
}