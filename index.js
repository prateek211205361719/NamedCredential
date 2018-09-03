const express = require("express");
const app = express();

app.get('/', (req, res) => {
    console.log(req.header);
    console.log(req.headers);
    res.send({
        Name:'Prateel'
    });
});

const port = process.env.PORT || 8080;

app.listen(port , (req, res) => {
    console.log('--------running-------');
});