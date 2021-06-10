import {makeAutoObservable} from 'mobx'
import axios from 'axios'

class FeedbackState {
    notAnsweredCount = 0
    alreadyAnsweredCount = 0
    notAnsweredQuestions = []
    alreadyAnswerdQuestions = []

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

    async getAlreadyAnswerdCount() {
        let data = {}
        await axios.get('/admin/feedback/getalreadyanswerdcount').then(response => {
            data = response.data
        })
        if (data.status === "ok") {
            this.alreadyAnsweredCount = data.count
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

    async getAlreadyAnswerdQuestions() {
        let data = {}
        await axios.get('/admin/feedback/getalreadyanswerdquestions').then(response => {
            data = response.data
        })
        if (data.status === "ok") {
            this.alreadyAnswerdQuestions = data.questions
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

        if (data.status === "ok") {}
    }
}

export default new FeedbackState();