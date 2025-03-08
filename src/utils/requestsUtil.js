import axios from "axios";

const apiDomain = process.env.REACT_APP_API_DOMAIN;

const sendPrompt = async (prompt) => {
    try {
        if (!apiDomain) {
            console.error("NO API DOMAIN AVAILABLE");
            return [];
        }

        const res = await axios.get(`${apiDomain}/generate`, {
            params: { prompt } // Correct way to pass query parameters
        });

        return res.data; // Use res.data instead of res.json()
    } catch (e) {
        console.error("Error fetching data:", e);
        return [];
    }
};

export { sendPrompt };
