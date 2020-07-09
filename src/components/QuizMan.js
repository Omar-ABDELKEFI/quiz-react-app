import React, {Component} from 'react';
import Question from "./Question";
import Answer from "./answer";
import './QuizMan.css'

class QuizMan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quiestions: {
                1: 'What US city is known as the "birthplace of jazz"?',
                2: 'What is the capital of Greece?',
                3: 'What planet gave birth to Superman?'
            },
            answers: {
                1: {
                    1: 'Chicago',
                    2: 'New Orleans',
                    3: 'New York'
                },
                2: {
                    1: 'Athens',
                    2: 'Patras',
                    3: 'Kalamata'
                },
                3: {
                    1: 'Krypton',
                    2: 'Mars',
                    3: 'Saturn'
                }
            },
            correctAnswers: {
                1: '2',
                2: '1',
                3: '1'
            },
            correctAnswer: 0,
            clickedAnswer: 0,
            step: 1,
            score: 0
        }
    }

    checkAnswer = answer => {
        const {correctAnswers, step, score} = this.state;
        if (answer === correctAnswers[step]) {
            this.setState({score: score + 1, correctAnswer: correctAnswers[step], clickedAnswer: answer})
        } else {
            this.setState({correctAnswer: 0, clickedAnswer: answer})
        }

    }
    nextStep = stepp => {
        this.setState({step: this.state.step + 1, correctAnswer: 0, clickedAnswer: 0})
    }

    render() {
        let {quiestions, answers, step, correctAnswer, clickedAnswer,score} = this.state;
        return (
            <div className="Content">
            {step <= Object.keys(quiestions).length ?
                (<>
                    <Question question={quiestions[step]}/>
                    <Answer answer={answers[step]} step={step} checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}/>
                    <button className="NextStep" onClick={()=>this.nextStep(step)}
                            disabled={
                                clickedAnswer && Object.keys(quiestions).length >= step ? false : true
                            }>
                        Next
                    </button>
                </>) : (<div className="finalpage"><h1>You have completed the quiz!</h1><p>Your score
                    is:{score} of{Object.keys(quiestions).length}</p>
                <p>thank you!</p></div>)}
            </div>

    )}


}

export default QuizMan;