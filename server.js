const express = require('express');
const app = express();
const port = 8080;

app.use(express.static(__dirname + '/'));
app.listen(port, function() {
    console.log("Server running at: http://localhost:" + port)
});