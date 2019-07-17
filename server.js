require('dotenv').config();

const express = require('express');
const app = express();
const port = process.env.PORT || 9000;





app.use(express.static(__dirname + '/public')); // you should change this to be wherever your html files are
app.use(express.urlencoded({extended: true}));
app.use(express.json());





app.listen(port, () => console.log(`app listening on port ${port}!`))

// console.log(routes)


