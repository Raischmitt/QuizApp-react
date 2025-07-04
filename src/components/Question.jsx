import { useState } from 'react';

import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
import QUESTIONS from '../question.js';

export default function Question({
    questionIndex,
    onSelectAnswer,
    onSkipAnnswer
}) {
    const [answer, setAnswer] = useState({
        selectedAnswer: '',
        isCorrect: null
    });

    function handleSelectAnswer(answer) {
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        })

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: Question[questionIndex].answer[0] === answer
            })

            setTimeout(() => {
                onSelectAnswer(answer);
            }, 2000);
        }, 1000);
    }

    let answerState = '';

    if (answer.selectedAnswer && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? 'correct' : 'wrong';
    } else if (answer.selectedAnswer) {
        answerState = 'answered';
    }

    return (
        <div id="question">
            <QuestionTimer
                timeout={10000}
                onTimeout={onSkipAnnswer}
            />

            <h2>{QUESTIONS[questionIndex].text}</h2>

            <Answers
                answers={QUESTIONS[questionIndex].answers}
                selectedAnswer={answer.selectedAnswer}
                answerState={answerState}
                onSelect={handleSelectAnswer}
            />

        </div>
    );
}