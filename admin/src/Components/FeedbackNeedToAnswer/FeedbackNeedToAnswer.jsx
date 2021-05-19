import React from 'react';
import FeedbackState from '../../Store/Feedback/feedback.state'

const FeedbackNeedToAnswer = () => {

    const Questions = FeedbackState.notAnsweredQuestions

    return (
        <div>
            FeedbackNeedToAnswer
        </div>
    )
}

export default FeedbackNeedToAnswer;