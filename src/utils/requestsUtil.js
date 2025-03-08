import axios from "axios";

const apiDomain = process.env.REACT_APP_API_DOMAIN;

const sendPrompt = async (prompt, latitude, longitude) => {
    try {
        if (!apiDomain) {
            console.error("NO API DOMAIN AVAILABLE");
            return [];
        }

        const res = await axios.post(`${apiDomain}/generate`, {
            prompt: prompt,
            latitude: latitude,
            longitude: longitude,
        });

        return res.data;
    } catch (e) {
        console.error("Error fetching data:", e);
        return [];
    }
};

export { sendPrompt };
