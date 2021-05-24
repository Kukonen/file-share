import React from 'react';
import FeedbackState from '../../Store/Feedback/feedback.state'
import {observer} from 'mobx-react-lite'
import { configure } from "mobx"

import FeedbackItem from './FeedbackItem'
import './FeedbackNeedToAnswer.css'

configure({
    enforceActions: "never",
})

const FeedbackNeedToAnswer = observer(() => {

    FeedbackState.getNotAnswerdQuestions()

    let questions = null

    if (FeedbackState.notAnsweredQuestions.length !== 0) {
        questions = FeedbackState.notAnsweredQuestions.map((question) => {
            return(
                <FeedbackItem key = {question.id} {...question}/>
            )})
    }

    return (
        <div>
            {questions}
        </div>
    )
})

export default FeedbackNeedToAnswer;