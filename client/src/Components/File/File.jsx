import React from 'react';
import './File.css';

const File = (props) => {
    return (
        <div className="File">
            <p>{props.name}</p>
        </div>
    )
}

export default File;