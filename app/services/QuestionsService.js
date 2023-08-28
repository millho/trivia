import { AppState } from "../AppState.js";
import { Question } from "../models/Questions.js";

class QuestionsService {
    async getQuestions() {
        console.log('fetching');

        const response = await fetch('https://opentdb.com/api.php?amount=10&category=27&difficulty=easy&type=multiple')

        const data = await response.json()

        const newQuestions = data.results.map(question => new Question(question))

        console.log('completed fetch');

        AppState.questions = newQuestions
    }
}

export const questionsService = new QuestionsService