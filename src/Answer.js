import React from 'react';
import './style/dist/App.css';

const Answer = (props) => {
        return (
            <div className="col-5">
                {props.selectedNumbers.map((number,i)=>
                    <span key={i} onClick={()=>props.redoNumber(number)}>{number}</span>
                )}
            </div>
        );
}
export default Answer;
