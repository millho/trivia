import { AppState } from "../AppState.js";
import { questionsService } from "../services/QuestionsService.js";
import { setHTML } from "../utils/Writer.js";

function _drawQuestions() {
    let content = ''
    let questions = AppState.questions
    questions.forEach(question => content += question.QuestionCard)
    setHTML('cards', content)
}

export class QuestionsController {
    constructor() {
        this.getQuestions()
        AppState.on('questions', _drawQuestions)
    }

    getQuestions() {
        console.log('attempting to fetch');
        questionsService.getQuestions()
    }
}