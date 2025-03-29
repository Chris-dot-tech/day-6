
const express = require('express');


const app = express();


const PORT = 1000;

app.use('/', (req, res) => {
    res.json({ message: "Hello World" });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
