import React from 'react';
import {useState} from 'react'
import FeedbackState from '../../Store/Feedback/feedback.state'

const FeedbackItem = (props) => {

    const [isShow, setIsShow] = useState(false)
    const [message, setMessage] = useState(`Hello, ${props.name}.

`)
    return (
        <div className="card Feedback-item">
                <div className="card-header">
                    <h2 className="mb-0" onClick={() => { setIsShow(!isShow) } }>
                        <button className="btn btn-link btn-block text-left collapsed nav-link" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        {props.title}
                        </button>
                    </h2>
                </div>
                <div className={isShow ? "collapse show" : "collapse"} aria-labelledby="headingTwo" data-parent="#accordionExample">
                    <div className="card-body"> 
                        {props.problem}
                    </div>
                    <div className="form-group">
                        <h5>Answer:</h5>
                        <textarea className="form-control Feedback-answer-textarea" rows="7" onChange={(value) => setMessage(value.target.value)} value ={message} />
                        <button type="button" className="btn btn-secondary Feedback-send-button" onClick = {() => FeedbackState.sendProblemSolution(props.id, props.email, message)}>Send</button>
                    </div>
                </div>
                
            </div>
    )
}

export default FeedbackItem;