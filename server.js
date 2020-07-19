const express = require('express');
const cacheTime = 31536000 // the time you want

const app = express();

function setCustomCacheControl (res, path) {
    res.setHeader('Cache-Control',  `no-cache`)
}

app.use(express.static('public', {
   // setHeaders: setCustomCacheControl,
    // maxAge: cacheTime,
}));

app.listen(3002, () => console.log('Server listen on port 3002...'));