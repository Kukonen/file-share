import React from 'react';
import {useState} from 'react'
import FeedbackState from '../../Store/Feedback/feedback.state'

const FeedbackItem = (props) => {

    const [isShow, setIsShow] = useState(false)

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
                        <textarea readOnly className="form-control Feedback-answer-textarea" rows="7" value ={props.answer} />
                    </div>
                </div>
                
            </div>
    )
}

export default FeedbackItem;