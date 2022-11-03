import axios from "axios";

// https://opentdb.com/api.php?amount=10&category=17&difficulty=medium&type=multiple
const baseURL = "https://opentdb.com/api.php?amount=";

export const getQuestionList = async (
    amount: number,
    difficulty: string,
): Promise<any> => {
    try {
        const response = await axios.get(`${baseURL}${amount}&difficulty=${difficulty}&
        type=boolean`);
        return response.data.result;
    }
    catch(e) {
        throw new Error(`Error fetching questions. ${e}`);
    }
};
