import { useState, useEffect } from "react";
import { Difficulty, totalQuestions } from '@/constants/index';
import { getQuestionList } from '@/services/fetchQuestions';
import { Questioncard } from '@/components/index';
import { QuestionProps } from '@/interface/index';

const Homepage = () => {
    const [questions, setQuestions] = useState<QuestionProps[]>([]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [startQuiz, setStartQuiz] = useState(false);
    const [loading, setLoading] = useState(true);
    const [gameOver, setGameOver] = useState(false);

    useEffect (() => {
        const fetchQuestions = async () => {
            const questionListing = await getQuestionList(
                totalQuestions, Difficulty.HARD
            );
            setQuestions(questionListing);
        }
        fetchQuestions();
    },[])

    const checkAnswer = () => {
        console.log("check answer")
    }

    return (
        <div>
            {!loading && !gameOver && startQuiz && (
                <Questioncard
                    questions={questions[questionNumber].question}
                    category={questions[questionNumber].category}
                    callback={checkAnswer}
                    totalQuestions={totalQuestions}
                    questionNumber={questionNumber}
                />
            )}
            {!startQuiz && (
                <>Start</>
            )}
        </div>
    )
}

export default Homepage;
