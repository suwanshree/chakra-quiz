import { useState, useEffect } from "react";
import { Difficulty, totalQuestions } from '@/constants/index';
import { getQuestionList } from '@/services/fetchQuestions';
import { Questioncard } from '@/components/index';
import { QuestionProps } from '@/interface/index';

const Homepage = () => {
    const [questions, setQuestions] = useState<QuestionProps[]>([]);
    const [questionNumber, setQuestionNumber] = useState(0);

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
            <Questioncard questions={questions[questionNumber].question}
            category={questions[questionNumber].category}
            callback={checkAnswer}
            totalQuestions={totalQuestions}
            questionNumber={questionNumber}
            />
        </div>
    )
}

export default Homepage;
