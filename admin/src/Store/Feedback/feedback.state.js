import {makeAutoObservable} from 'mobx'
import axios from 'axios'

class FeedbackState {
    notAnsweredCount = 0
    notAnsweredQuestions = []

    constructor() {
        makeAutoObservable(this)
    }

    async getNotAnswerdCount() {
        let data = {}
        await axios.get('/admin/feedback/notansweredcount').then(response => {
            data = response.data
        })
        if (data.status === "ok") {
            this.notAnsweredCount = data.count
        }
    }

    async getNotAnswerdQuestions() {
        let data = {}
        await axios.get('/admin/feedback/getnotanswerdquestions').then(response => {
            data = response.data
        })
        if (data.status === "ok") {
            this.notAnsweredQuestions = data.questions
        }
    }

    async sendProblemSolution(id, email, message) {
        let data = {}
        await axios.post('/admin/feedback/sendproblemsolution', {
            id: id,
            email: email,
            message: message
        }).then(response => {
            data = response.data
        })
    }
}

export default new FeedbackState();