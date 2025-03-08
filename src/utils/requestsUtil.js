import axios from "axios";

const apiDomain = process.env.REACT_APP_API_DOMAIN;

const sendPrompt = async (prompt, latitude, longitude, setApiError) => {
    try {
        if (!apiDomain) {
            console.error("NO API DOMAIN AVAILABLE");
            throw new Error("No API DOMAIN AVAILABLE");
        }

        const res = await axios.post(`${apiDomain}/generate`, {
            prompt: prompt,
            latitude: latitude,
            longitude: longitude,
        });

        return res.data;
    } catch (e) {
        console.error("Error fetching data:", e);
        throw new Error("API error happened");
    }
};

export { sendPrompt };
