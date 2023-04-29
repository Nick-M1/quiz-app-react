import {range, shuffle} from "./array-utils";
import {TOTAL_NUMBER_OF_QUESTIONS} from "../constants/game-constants";
import {
    LOCALSTORAGE_MULTIPLECHOICEQUIZ_GAMESTATE, LOCALSTORAGE_MULTIPLECHOICEQUIZ_PREVANSWERS,
    LOCALSTORAGE_MULTIPLECHOICEQUIZ_QUESTIONS
} from "../constants/localstorage-constants";

export function startMultipleChoiceQuiz(questionsLength: number) {
    // QUESTIONS LOCALSTORAGE
    const shuffledQuestions = shuffle(range(questionsLength)).slice(0, TOTAL_NUMBER_OF_QUESTIONS)
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