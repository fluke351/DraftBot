const fetch = require('node-fetch');

async function testApi() {
    console.log("Testing API connection to http://localhost:3000/api/chat...");
    try {
        const response = await fetch('http://localhost:3000/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ prompt: "ทดสอบการเชื่อมต่อ API อีกครั้ง" })
        });

        const data = await response.json();

        if (response.ok) {
            console.log("✅ API Test Success!");
            console.log("Response:", JSON.stringify(data, null, 2));
        } else {
            console.error("❌ API Test Failed:", data);
        }
    } catch (error) {
        console.error("❌ Connection Error:", error.message);
    }
}

testApi();