import React from 'react';
import FeedbackState from '../../Store/Feedback/feedback.state'
import {observer} from 'mobx-react-lite'
import { configure } from "mobx"
import {useState} from 'react'

import FeedbackItem from './FeedbackItem'
import './FeedbackNeedToAnswer.css'

configure({
    enforceActions: "never",
})

const FeedbackNeedToAnswer = observer(() => {

    FeedbackState.getNotAnswerdQuestions()

    const [findTitle, setFindTitle] = useState('');

    let questions = null

    if (FeedbackState.notAnsweredQuestions.length !== 0) {
        questions = FeedbackState.notAnsweredQuestions.map((question) => {
            return(
                <FeedbackItem key = {question.id} {...question}/>
            )})
    }

    const findItemByTitle = () => {
        if (FeedbackState.notAnsweredQuestions.length !== 0) {
            return questions.filter(question => question.props.title.toLowerCase().indexOf(findTitle.toLowerCase()) !== -1)
        } else {
            return null;
        }
    }

    return (
        <div>
            <div className="Feedback-find-input-block">
                <input type="text" className="form-control" placeholder="such problim" value = {findTitle} onChange={value => setFindTitle(value.target.value)}/>
            </div>
            <div>
                {findTitle === '' ? questions : findItemByTitle()}
            </div>
        </div>
    )
})

export default FeedbackNeedToAnswer;