const axios = require('axios');
const apiKey = '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';
const prompt = 'What is the weather like today?';
const model = 'text-davinci-002';

const data = { prompt, model };
const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${apiKey}`
};

axios.post('https://api.openai.com/v1/engines/davinci/completions', data, { headers })
    .then(response => {
        const sessionToken = response.data.session_token;
        console.log(sessionToken);
    });