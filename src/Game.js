import React, { Component } from 'react';
import Stars from './Stars';
import Button from './Button';
import Answer from './Answer';
import Numbers from './Numbers';
import './style/dist/App.css';


class Game extends Component {
    state = {
        selectedNumbers:[],
        usedNumbers:[],
        numberOfStars: 1+Math.floor(Math.random()*9),
        answerIsCorrect:null,
    };
    selectNumber = (clickedNumber) => {
        if(this.state.selectedNumbers.indexOf(clickedNumber)>=0){
            return ;
        }
        this.setState(prevState=>({
            answerIsCorrect:null,
            selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
        }));
    }
    redoNumber = (clickedNumber)=>{
        this.setState(prevState=>({
            answerIsCorrect:null,
            selectedNumbers: prevState.selectedNumbers.filter(
                (number)=>number!==clickedNumber
            )}));
    }
    checkAnswer=()=>{
        this.setState(prevState=>({
            answerIsCorrect: prevState.numberOfStars === prevState.selectedNumbers.reduce(
                (acc,n)=>acc+n,0
            )}));
    }
    acceptAnswer=()=>{
        this.setState(prevState=>({
            usedNumbers: prevState.usedNumbers.concat(prevState.selectedNumbers),
            selectedNumbers:[],
            answerIsCorrect:null,
            numberOfStars:1+Math.floor(Math.random()*9),
            redraw:5,
        }));
    }
    render() {
        const {numberOfStars,selectedNumbers,answerIsCorrect,usedNumbers,redraw}=this.state;
        return (
            <div className="container">
                <h3>Play React game</h3>
                <hr />
                <div className="row">
                    <Stars numberOfStars={numberOfStars} />
                    <Button acceptAnswer={this.acceptAnswer} checkAnswer={this.checkAnswer} answerIsCorrect={answerIsCorrect} selectedNumbers={selectedNumbers} redraw={this.redraw}/>
                    <Answer selectedNumbers={selectedNumbers}  redoNumber={this.redoNumber} />
                </div>
                <hr/>
                <Numbers usedNumbers={usedNumbers} selectNumber={this.selectNumber} selectedNumbers={selectedNumbers}/>
            </div>
        );
    }
}
export default Game;
