import React, {useState} from 'react';
import './SupportPage.css';
import axios from 'axios';

const Support = () => {

    let [problemText, setProblemText] = useState('');
    let [isSend, setIsSend] = useState(false);

    const changeText = (text) => {
        setIsSend(false);
        setProblemText(text);
    }
    

    const sendText = async () => {

        let data = {}

        await axios.post('/support/send', {
            text: problemText
        }).then((response) => {
            data = JSON.parse(JSON.stringify(response.data))
        })

        console.log(data)
        setIsSend(true);
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
            <div className="input-group mb-3">
                <input type="text" className={isSend ? "form-control is-valid" : "form-control"} placeholder="If you didn't find your problem" value={problemText} onChange={event => changeText(event.target.value)}/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={() => sendText()}>Send</button>
                </div>
                <div class="valid-feedback">
                    Thanks!
                </div>
            </div>
        </div>
    )
}

export default Support;