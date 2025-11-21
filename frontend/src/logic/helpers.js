
export { makeApiRequest };


const makeApiRequest = async (endpoint, param) => {
    try {
        const response = await fetch(`http://localhost:5000/api${endpoint}`, param);
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`API request failed: ${errorText}`);
        }
        return await response.json();
    } catch (error) {
        console.error('API request error:', error);
        throw error;
    }
};
