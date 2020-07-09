import React from 'react';
import './answer.css'
function Answer(props) {
    let answer= Object.keys(props.answer).map((qAnswer)=>(<li className={props.correctAnswer===qAnswer?'correct':props.clickedAnswer===qAnswer?'incorrect':''} key={qAnswer} onClick={()=>props.checkAnswer(qAnswer)}>{props.answer[qAnswer]}</li>));
    return (
      <ul disabled={props.clickedAnswer? true:false} className="Answer">
          {answer}
          <div>{
              props.correctAnswer?'cooect answer!': props.clickedAnswer?'Incorrect Answer':''
          }</div>
      </ul>
    );
}

export default Answer;