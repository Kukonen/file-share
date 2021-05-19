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
        console.log('here')
        await axios.get('/admin/feedback/notansweredcount').then(response => {
            data = response.data
        })
        console.log(data)
        if (data.status === "ok") {
            this.notAnsweredCount = data.count
        }
    }
}

export default new FeedbackState();