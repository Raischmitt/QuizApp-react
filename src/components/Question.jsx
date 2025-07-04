import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

export default function Question({
    questionText,
    answers,
    onSelectAnswer,
    selectedAnswer,
    answerState,
    onSkipAnnswer
}) {

    return (
        <div id="question">
            <QuestionTimer
                timeout={10000}
                onTimeout={onSkipAnnswer}
            />
            
            <h2>{questionText}</h2>

            <Answers
                answers={answers}
                selectedAnswer={selectedAnswer}
                answerState={answerState}
                onSelect={onSelectAnswer}
            />

        </div>
    );
}