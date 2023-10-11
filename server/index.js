const express = require('express')
const bodyParser = require('body-parser');
const config = require('../config')
const port = config.server.port

const app = express()
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
});

app.get('/',(req, res) => {
    res.send({
        status: 200,
        message: 'successful'
    })
})

app.listen(port, () => {
  console.log(  `Store app listening on port ${port}`,
                `\nhttp://localhost:${port}`)
})