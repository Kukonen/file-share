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
}

export default new FeedbackState();