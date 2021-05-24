import React, {useState} from 'react';
import './SupportPage.css';
import axios from 'axios';

const Support = () => {

    let [problemTitle, setProblemTitle] = useState('');
    let [problemText, setProblemText] = useState('');
    let [isSend, setIsSend] = useState(false);
    

    const sendText = async () => {

        if (problemText === '' || problemTitle === '') return;

        let data = {}

        await axios.post('/support/send', {
            title: problemTitle,
            text: problemText
        }).then((response) => {
            data = JSON.parse(JSON.stringify(response.data))
        })

        setIsSend(true);
        setProblemTitle('');
        setProblemText('');
    }

    return (
        <div className="Support">
            <ul class="list-group Support-list-group">
                <li class="list-group-item Support-list-group-item">Explanation of the first problem</li>
                <li class="list-group-item Support-list-group-item">Explanation of the second problem</li>
                <li class="list-group-item Support-list-group-item">Explanation of the third problem</li>
                <li class="list-group-item Support-list-group-item">Explanation of the fourth problem</li>
            </ul>
            <div>
                {isSend ? 
                    <h4 style={{color: "green"}}>Thank you!</h4> :
                    <h4>Didn't find your problem? Ask us!</h4>
                }
                <input type="text" className={isSend ? "form-control is-valid" : "form-control"} placeholder="Title" value={problemTitle} onChange={event => {
                                                                                                                                                setProblemTitle(event.target.value);
                                                                                                                                                setIsSend(false)
                                                                                                                                            }}/>
                <textarea value = {problemText} className={isSend ? "Support-textarea form-control is-valid" : "Support-textarea form-control"} placeholder="Description" rows="5" onChange={value => {
                                                                                                                                                setProblemText(value.target.value)
                                                                                                                                                setIsSend(false)
                                                                                                                                            }} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => sendText()}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Support;