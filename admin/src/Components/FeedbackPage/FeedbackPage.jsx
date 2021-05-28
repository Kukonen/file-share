import React from 'react'
import './FeedbackPage.css'
import {useState} from 'react'
import {observer} from 'mobx-react-lite'
import FeedbackState from '../../Store/Feedback/feedback.state'

import FeedbackNeedToAnswer from '../FeedbackNeedToAnswer/FeedbackNeedToAnswer'
import FeedbackAlreadyAnswered from '../FeedbackAlreadyAnswered/FeedbackAlreadyAnswered'


const FeedbackPage = observer(() => {

    const [mode, setMode] = useState(0)

    FeedbackState.getNotAnswerdCount()
    FeedbackState.getNotAnswerdQuestions()
    FeedbackState.getAlreadyAnswerdCount()
    FeedbackState.getAlreadyAnswerdQuestions()

    return (
        <div className = "Feedback">
            <div className = "Feedback-div-30">
                <ul className="list-group">
                    <li className = {mode === 0 ?"list-group-item list-group-item-action active" : "list-group-item"}><span className="Feedback-link-span" onClick = {() => setMode(0)}>Status</span></li>
                    <li className = {mode === 1 ?"list-group-item list-group-item-action active" : "list-group-item"}><span className="Feedback-link-span" onClick = {() => setMode(1)}>Need to answer</span></li>
                    <li className = {mode === 2 ?"list-group-item list-group-item-action active" : "list-group-item"}><span className="Feedback-link-span" onClick = {() => setMode(2)}>Already answered</span></li>
                </ul>
            </div>
            <div className = "Feedback-div-40">
            {
                mode === 0 ?
                    <div>
                        <h3>Staus</h3>
                        <p>You have {FeedbackState.notAnsweredCount} new user's problems</p>
                        <p>And {FeedbackState.alreadyAnsweredCount} already answered</p>
                    </div> :
                mode === 1 ?
                    <FeedbackNeedToAnswer /> :
                mode === 2 ?
                    <FeedbackAlreadyAnswered /> :
                null
            }
            </div>
            <div className = "Feedback-div-30"></div>
        </div>
    )
})

export default FeedbackPage;