const fetch = require('node-fetch');

const API_KEY = 'AIzaSyDUvr5l01Va5p3pr8jvEK3_0aRT1EYUaGs';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent?key=' + API_KEY;

const payload = {
    contents: [{
        parts: [{ text: "Hello, this is a test connection from Node.js." }]
    }]
};

async function testApi() {
    console.log("Testing Gemini API connection with Node.js...");
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (response.ok) {
            const data = await response.json();
            console.log("Success! API Response:");
            console.log(data.candidates[0].content.parts[0].text);
        } else {
            console.log(`Error: Status Code ${response.status}`);
            const text = await response.text();
            console.log(text);
        }
    } catch (error) {
        console.error("Exception occurred:", error);
    }
}

testApi();
