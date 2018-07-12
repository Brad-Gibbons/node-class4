const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      morgan = require('morgan');
const app = express();
const port = 8080;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
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
app.get('/signup', function(req, res){
    res.render('signup', );
})
app.post('/signup', function(req, res){
    res.json({
        user: req.body.name,
        password: req.body.password
    })
})
app.get('/questions', function(req, res) {
    res.render('questions', );
});
app.post('/questions', function(req, res){
    res.json({
        user: req.body.name,
        email: req.body.email,
        age: req.body.age
    })
})
app.get('/teams/:name', function(req, res){
    res.json({
        name: req.params.name
    })
})
// Querys

app.get('/search', function(req, res) {
    res.json({
        message: req.query
    })
})

app.get('/teams/:name/:player', function(req, res){
    res.json({
        name: req.params.name,
        player: req.params.player
    })
})

app.get('*', function(req, res){
    res.render('error', {message: 'try something else'})
});

app.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log(`Server is on port ${port}`);
});