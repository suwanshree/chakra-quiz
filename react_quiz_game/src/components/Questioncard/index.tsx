import {Box, Heading, Flex} from "@chakra-ui/react";
import {QuestionCardProps} from "@/interface/index";
import Appbutton from "@/components/Button";

const Questioncard: React.FC<QuestionCardProps>= ({
    questions,
    callback,
    category,
    totalQuestions,
    questionNumber
}) => {
    return (
        <>
        <Box bg="white" width="100%">
            <Box mb={6} fontSize="md" fontWeight="bold" textTransform="uppercase">
                Your progress: {questionNumber}/{totalQuestions}
            </Box>
            <Box>
                {category}
            </Box>
            <Heading>
                <Box>
                    {questions}
                </Box>
            </Heading>

            <Flex>
                <Box>
                    <Appbutton
                        colorScheme="purple"
                        variant="outline"
                        value="False"
                        width="full"
                        onClick={callback}
                    />
                </Box>
            </Flex>
        </Box>
        </>
    )
}

export default Questioncard;
