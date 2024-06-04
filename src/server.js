const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// Handle GET requests to any path by sending back the main index.html file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
