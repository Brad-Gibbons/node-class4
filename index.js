const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// init ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.post('/', function (req, res){
    const data = req.body;

    res.json({
        message: data
    });
});
app.get('/', function(req, res){
    res.render('index', );
})

app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`Server is on port ${port}`);
});