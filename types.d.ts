type User = {
    userid: string
    username: string
}

type GameState = {
    currentQuestionIndex: number
    userAnswer: null | number,
    score: number
    timer: number
}

type MultipleChoiceQuestion = {
    index: number,
    questionText: string,
    answers: string[]
    correctAnswer: number,
    difficulty: import('src/constants/difficulty-enum').Difficulty
}