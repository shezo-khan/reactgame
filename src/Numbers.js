import React from 'react';
import './style/dist/App.css';
import _ from 'lodash';

const Numbers = (props) => {
        const numberClassName=(number)=>{
            if(props.selectedNumbers.indexOf(number)>=0){
                return 'selected';
            }
            if(props.usedNumbers.indexOf(number)>=0){
                return 'used';
            }
        }
        return (
            <div className="card text-center">
                <div>
                    { Numbers.list.map((number,i)=><span onClick={()=>props.selectNumber(number)} className={numberClassName(number)} key={i}>{number}</span>)}
                </div>
            </div>
        );
}
Numbers.list = _.range(1,10);

export default Numbers;