import React from 'react';
import './style/dist/App.css';

const Button = (props) => {
        let button;
        switch (props.answerIsCorrect){
            case true:
                button =
                <button className="btn btn-success" onClick={props.acceptAnswer}>
                    <i className="fa fa-check"></i>
                </button>;
                break;
            case false:
                button =
                    <button className="btn btn-danger">
                        <i className="fa fa-times"></i>
                    </button>;
                break;
            default:
                button =
                    <button className="btn"
                            onClick={props.checkAnswer}
                            disabled={props.selectedNumbers.length===0}>
                        =
                    </button>;
                break;
        }
        return (
            <div className="col-2 text-center">
                {button}
                <br/>
                <br/>
                <button className="btn btn-warning btn-sm" onClick={props.redraw}><i className="fa fa-refresh"></i></button>
            </div>
        );
}
export default Button;
