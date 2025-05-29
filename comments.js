//Create web server for comments
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());
// In-memory storage for comments
let comments = [];
// Endpoint to get all comments    
app.get('/comments', (req, res) => {
    res.json(comments);
});
// Endpoint to add a new comment
app.post('/comments', (req, res) => {
    const comment = req.body;
    if (!comment || !comment.text || !comment.author) {
        return res.status(400).json({ error: 'Comment must have text and author' });
    }
    comment.id = comments.length + 1; // Simple ID generation
    comments.push(comment);
    res.status(201).json(comment);
});
// Endpoint to delete a comment by ID
app.delete('/comments/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    comments = comments.filter(comment => comment.id !== id);
    res.status(204).send();
});
// Start the server
app.listen(port, () => {
    console.log(`Comments server running at http://localhost:${port}`);
});
// Export the app for testing purposes
module.exports = app;
// Export the comments array for testing purposes
module.exports.comments = comments;
// Export the port for testing purposes
module.exports.port = port;
// Export the express app for testing purposes
module.exports.expressApp = app;
// Export the express app for testing purposes
module.exports.express = express;
// Export the bodyParser for testing purposes
module.exports.bodyParser = bodyParser;
// Export the cors for testing purposes
module.exports.cors = cors;
// Export the express app for testing purposes
module.exports.app = app;
// Export the express app for testing purposes
module.exports.expressApp = app;
// Export the express app for testing purposes