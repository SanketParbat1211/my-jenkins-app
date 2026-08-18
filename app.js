const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
    res.send(`
        <div style="text-align:center; margin-top:50px; font-family:Arial;">
            <h1 style="color:#2c3e50;">नमस्ते! माझी Jenkins वेब ॲप्लिकेशन यशस्वीरीत्या रन झाली आहे!</h1>
            <p style="color:#27ae60; font-size:20px;">Frontend + Backend Integration Successful.</p>
        </div>
    `);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});