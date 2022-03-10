let express = require('express');
let app = express();
let port = 3000

app.use(express.json({limit: '50mb',extended: true}));
app.use(express.urlencoded({limit: '50mb',extended: true}));

app.use(express.static("client"));
app.listen(port);

console.log(`Listening on port: ${port}`)
