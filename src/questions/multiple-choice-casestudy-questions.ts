import {Difficulty} from "../constants/difficulty-enum";

const sampleCasestudyText = `alksdjksadjskldjs sadjskdjsjd jaskldjsdjsal sadjsladjskldj kasjdlsjdlksajd kajdlsajdlksjd asjdlsajd
kasjdlsjdlksajd kajdlsajdlksjd asjdlsajd kasjdlsadadadjdlksajd kajdlsajdlksjd asjdlsajd
kasjdlsjdlksajd kajdlsajdlksjd asjdlsajd kasjdlsjdlksadadajd kajdlsajdlksjd asjdlsajd
kasjdlsjdlksajd kajdlsajdlksjd asjdlsajd dsds as dsdsad sad sd sd sadsads dsd sdsad
kasjdlsjdlksajd kajdlsajdlksjd asjdlsajd asssssssssssssssdsds ds dsdsad sd sdsadsa dsd
kasjdlsjdlksajd kajdlsajdlksjd asjdlsajd kasjdlsjdlksajd kajdlsajdlksjd asjdlsajd kasjdlsjdlksajd kajdlsajdlksjd asjdlsajd kasjdlsjdlksajd kajdlsajdlksjd asjdlsajd`

export const CASESTUDY_QUESTIONS: MultipleChoiceQuestion[] = [
    {
        index: 1,
        questionText: 'The first question - answer is 0',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 0,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 2,
        questionText: 'The second question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 3,
        questionText: 'The third question - answer is 2',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 2,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 4,
        questionText: 'The forth question - answer is 3',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 3,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 5,
        questionText: 'The fith question - answer is 0',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 0,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 6,
        questionText: 'The sixth question - answer is 0',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 0,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 7,
        questionText: 'The seventh question - answer is 0',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 0,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 8,
        questionText: 'The eight question - answer is 0',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 0,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 9,
        questionText: 'The nineth question - answer is 0',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 0,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 10,
        questionText: 'The tenth question - answer is 2',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 2,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 11,
        questionText: 'The twelveth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 12,
        questionText: 'The thirteenth question - answer is 3',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 3,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 13,
        questionText: 'The forteenth question - answer is 0',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 0,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 14,
        questionText: 'The fithteenth question - answer is 2',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 2,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 15,
        questionText: 'The sixteenth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 16,
        questionText: 'The seventeenth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 17,
        questionText: 'The eighteenth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 18,
        questionText: 'The nineteenth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 19,
        questionText: 'The twentheeth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 20,
        questionText: 'The twenty-first question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 21,
        questionText: 'The twenty-second question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 22,
        questionText: 'The twenty-third question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 23,
        questionText: 'The twenty-forth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 24,
        questionText: 'The twenty-fith question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 25,
        questionText: 'The twenty-sixth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 26,
        questionText: 'The twenty-seventh question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 27,
        questionText: 'The twenty-eighth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 28,
        questionText: 'The twenty-nineth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 29,
        questionText: 'The thirtyth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 30,
        questionText: 'The thirty-first question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 31,
        questionText: 'The thirty-second question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 32,
        questionText: 'The thirty-third question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 33,
        questionText: 'The thirty-forth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 34,
        questionText: 'The thirty-fivth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 35,
        questionText: 'The thirty-sixth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 36,
        questionText: 'The thirty-seventh question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 37,
        questionText: 'The thirty-eighth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 38,
        questionText: 'The thirty-nineth question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 39,
        questionText: 'The fortith question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
    {
        index: 40,
        questionText: 'The forti-first question - answer is 1',
        casestudyText: sampleCasestudyText,
        answers: ['Answer 1', 'Answer 2', 'Answer 3', 'Answer 4'],
        correctAnswer: 1,
        difficulty: Difficulty.MEDIUM
    },
]

export const CASESTUDY_QUESTIONS_LENGTH = CASESTUDY_QUESTIONS.length