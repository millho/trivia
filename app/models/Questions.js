

export class Question {

    constructor({ category, type, difficulty, question, correct_answer, incorrect_answers }) {
        this.category = category
        this.type = type
        this.difficulty = difficulty
        this.question = question
        this.correctAnswer = correct_answer
        this.incorrectAnswers = incorrect_answers
    }

    get QuestionCard() {
        return `
    <div class="col-6 p-3 border border-primary">
        <div class="row p-3">
            <h2>${this.question}</h2>
            <h4 class="mx-1 btn btn-primary">${this.correctAnswer}</h4>
            <h4 class="mx-1 btn btn-primary">${this.incorrectAnswers[0]}</h4>
            <h4 class="mx-1 btn btn-primary">${this.incorrectAnswers[1]}</h4>
            <h4 class="mx-1 btn btn-primary">${this.incorrectAnswers[2]}</h4>
        </div>
    </div>`
    }
}