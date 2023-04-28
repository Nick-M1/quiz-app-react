export function getButtonColor(userAnswer: number | null, correctAnswer: number, thisAnswerIndex: number): string {
    const hasUserChosen = userAnswer !== null;
    const isThisAnswerCorrect = hasUserChosen && thisAnswerIndex === correctAnswer

    if (isThisAnswerCorrect)
        return 'bg-[#55AC78] text-white cursor-not-allowed';

    if (userAnswer === thisAnswerIndex)
        return 'bg-[#AC5050] text-white cursor-not-allowed';

    if (hasUserChosen)
        return 'bg-neutral-100 text-[#9F50AC] cursor-not-allowed';

    return 'bg-white text-[#9F50AC]';
}