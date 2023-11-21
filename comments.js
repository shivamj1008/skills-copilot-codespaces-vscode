//Create web server
const express = require('express');
const app = express();
const port = 3000;

//Create a static file server
app.use(express.static('public'));

//Create a route for /comments
app.get('/comments', function(request, response) {
    response.send('This will be a list of comments');
});

//Start the server
app.listen(port, () => console.log(`Listening on port: ${port}`));