import { useState, useEffect } from "react";
import { Difficulty, totalQuestions } from '@/constants/index';
import { getQuestionList } from '@/services/fetchQuestions';
import { Questioncard } from '@/components/index';
import { QuestionProps, AnswerObject } from '@/interface/index';
import { Appspinner, Appbutton } from '@/components/index';
import {Box, Heading, Divider} from "@chakra-ui/react";

const Homepage = () => {
    const [questions, setQuestions] = useState<QuestionProps[]>([]);
    const [questionNumber, setQuestionNumber] = useState(0);
    const [startQuiz, setStartQuiz] = useState(false);
    const [loading, setLoading] = useState(true);
    const [gameOver, setGameOver] = useState(false);
    const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);

    useEffect (() => {
        const fetchQuestions = async () => {
            const questionListing = await getQuestionList(
                totalQuestions, Difficulty.HARD
            );
            setQuestions(questionListing);
            setLoading(false);
        }
        fetchQuestions();
    },[])

    const checkAnswer = () => {
        console.log("check answer");
        setQuestionNumber(1);
    }

    const startQuizGame = () => {
        console.log("start quiz");
    }

    const nextQuestion = () => {
        console.log("next question");
    }

    return (
        <div>
            {userAnswer.length === questionNumber &&
            !gameOver && !loading && !startQuiz ? (
                <>
                    <div className="greeting-box">
                        <Box boxShadow="base" p="6" rounded="md" bg="white" maxW="560px">
                            <Heading as="h1" size="lg" mb={2}>
                                Welcome to the Quiz
                            </Heading>
                            <p>
                                Good luck with the {totalQuestions} today!
                            </p>
                            <Appbutton
                                colorScheme="purple"
                                variant="solid"
                                onClick={startQuizGame}
                                value="Start Quiz"
                            />
                        </Box>
                    </div>
                </>
            ) : null}
            {loading && (
                <Appspinner
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="purple"
                    size="lg"
                    thickness="5px"
                />
            )}
            {!loading && !gameOver && startQuiz && (
                <>
                    <Questioncard
                    questions={questions[questionNumber].question}
                    category={questions[questionNumber].category}
                    callback={checkAnswer}
                    totalQuestions={totalQuestions}
                    questionNumber={questionNumber}
                />
                <Appbutton
                        disabled = {
                            userAnswer.length === questionNumber + 1 &&
                            questionNumber !== totalQuestions
                                ? ""
                                : "disabled"
                        }
                        colorScheme="purple"
                        variant="solid"
                        onClick={nextQuestion}
                        value="Next Question"
                        className="next-button"
                        width="full"
                    />
                </>
            )}
            {!startQuiz && (
                <>Start</>
            )}
        </div>
    )
}

export default Homepage;
