const express = require('express');
const resize = require('./resize');
const server = express();

server.get('/', (req, res) => {
    const widthString = req.query.width;
    const heightString = req.query.height;
    const format = req.query.format;

    // Parse to integer if possible
    let width, height;
    if (widthString) {
        width = parseInt(widthString);
    }
    if (heightString) {
        height = parseInt(heightString);
    }
    // Set the content-type of the response
    res.type(`image/${format || 'png'}`);

    // Get the resized image
    resize('wm.jpg', format, width, height).pipe(res);
});

server.listen(8000, () => {
    console.log('Server started!');
});