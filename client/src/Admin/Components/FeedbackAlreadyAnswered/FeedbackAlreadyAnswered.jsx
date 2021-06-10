import React from 'react';
import FeedbackState from '../../Store/Feedback/feedback.state'
import {observer} from 'mobx-react-lite'
import { configure } from "mobx"
import {useState} from 'react'

import FeedbackItem from './FeedbackItem'
import './FeedbackAlreadyAnswered.css'

configure({
    enforceActions: "never",
})

const FeedbackAlreadyAnswered = observer(() => {

    FeedbackState.getAlreadyAnswerdQuestions()

    const [findTitle, setFindTitle] = useState('');

    let questions = null

    if (FeedbackState.notAnsweredQuestions.length !== 0) {
        questions = FeedbackState.alreadyAnswerdQuestions.map((question) => {
            return(
                <FeedbackItem key = {question.id} {...question}/>
            )})
    }

    const findItemByTitle = () => {
        if (FeedbackState.alreadyAnswerdQuestions.length !== 0 && findTitle !== '') {
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

export default FeedbackAlreadyAnswered;