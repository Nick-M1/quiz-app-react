import {MULTIPLE_CHOICE_QUESTIONS_LENGTH} from "../questions/multiple-choice-questions";
import {range, shuffle} from "./array-utils";
import {
    LOCALSTORAGE_MULTIPLECHOICEQUIZ_GAMESTATE, LOCALSTORAGE_MULTIPLECHOICEQUIZ_PREVANSWERS,
    LOCALSTORAGE_MULTIPLECHOICEQUIZ_QUESTIONS
} from "../constants/localstorage-constants";
import {MULTIPLECHOICEQUIZ_NUMBER_OF_QUESTIONS} from "../constants/game-constants";

export function startMultipleChoiceQuiz() {
    // QUESTIONS LOCALSTORAGE
    const shuffledQuestions = shuffle(range(MULTIPLE_CHOICE_QUESTIONS_LENGTH)).slice(0, MULTIPLECHOICEQUIZ_NUMBER_OF_QUESTIONS)
    localStorage.setItem(LOCALSTORAGE_MULTIPLECHOICEQUIZ_QUESTIONS, JSON.stringify(shuffledQuestions))

    // GAMESTATE LOCALSTORAGE
    const initalGamestate: GameState = {
        currentQuestionIndex: 0,
        userAnswer: null,
        score: 0,
        timer: 0
    }

    localStorage.setItem(LOCALSTORAGE_MULTIPLECHOICEQUIZ_GAMESTATE, JSON.stringify(initalGamestate))

    // ANSWERS LOCALSTORAGE
    localStorage.setItem(LOCALSTORAGE_MULTIPLECHOICEQUIZ_PREVANSWERS, JSON.stringify([]))
}

export function getPreviousAnswers() {
    const prevAnswersStorage = localStorage.getItem(LOCALSTORAGE_MULTIPLECHOICEQUIZ_PREVANSWERS)
    if (prevAnswersStorage === null)
        return []

    return  JSON.parse(prevAnswersStorage) as number[]
}

export function getGamestate() {
    const gamestateLocalstorage = localStorage.getItem(LOCALSTORAGE_MULTIPLECHOICEQUIZ_GAMESTATE)

    if (gamestateLocalstorage == null)
        return null

    return JSON.parse(gamestateLocalstorage) as GameState
}

export function updateGamestateWithAnswer(questionIndex: number, answerIndex: number, isCorrect: boolean) {
    const gamestate = getGamestate()

    if (gamestate === null)
        return

    gamestate.userAnswer = answerIndex

    if (isCorrect)
        gamestate.score += 1

    localStorage.setItem(LOCALSTORAGE_MULTIPLECHOICEQUIZ_GAMESTATE, JSON.stringify(gamestate))



    const prevAnswers = getPreviousAnswers()
    prevAnswers.push(answerIndex)
    localStorage.setItem(LOCALSTORAGE_MULTIPLECHOICEQUIZ_PREVANSWERS, JSON.stringify(prevAnswers))
}

export function updateGamestateWithNewQuestion() {
    const gamestate = getGamestate()

    if (gamestate === null)
        return

    gamestate.userAnswer = null
    gamestate.currentQuestionIndex += 1
    gamestate.timer = 0

    window.localStorage.setItem(LOCALSTORAGE_MULTIPLECHOICEQUIZ_GAMESTATE, JSON.stringify(gamestate))
}

export function updateGamestateWithPreviouslyAnsweredQuestion(direction: number) {
    const gamestate = getGamestate()
    const prevAnswers = getPreviousAnswers()

    if (gamestate === null)
        return

    gamestate.currentQuestionIndex += direction
    gamestate.userAnswer = prevAnswers[gamestate.currentQuestionIndex]
    gamestate.timer = 0

    window.localStorage.setItem(LOCALSTORAGE_MULTIPLECHOICEQUIZ_GAMESTATE, JSON.stringify(gamestate))
}