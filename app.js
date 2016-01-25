var cool = require('cool-ascii-faces');
var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');

// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.set('view engine', 'ejs')
app.set('trust proxy', 1)
app.use(session({
	secret: 'superdupersecret'
}));

// db
var db;
var sess;
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/dice';
MongoClient.connect(mongoUrl, function(err, database) {
  if (err) { throw err; }
  db = database;
  process.on('exit', db.close);
});

bcrypt.genSalt(10, function(err, salt){
	bcrypt.hash('password', salt, function(err, hash){

	})
})



app.get('/', function(req, res){
	sess=req.session;
	
	if(sess.email){
		res.redirect('/welcome');
	} else {
		res.render('index.ejs')
	}
});

app.get('/cool', function(req, res){
	res.send(cool());
})

app.post('/login', function(req, res){
	sess=req.session;
	sess.email=req.body.email;
	res.end('done');
});

app.get('/welcome', function(req, res){
	sess=req.session;
	if(sess.email){
		res.write('<h1>Hello ' +sess.email+'</h1>');
		res.write('<a id=one-player href="/singleplayer">One Player</a><br>');
		res.write('<a id=one-player href="/multiplayer">Two Player(coming soon)</a><br>');
		res.end('<a href="/logout">Logout</a>');
	} else {
		res.write('<h1>Please login first.</h1>');
		res.end('<a href="/">Login</a>')
	}
})

app.get('/logout', function(req,res){
	req.session.destroy(function(err){
		if(err){
			console.log(err);
		} else {
			res.redirect('/');
		}
	});
});

app.get('/singleplayer', function(req, res){
	sess=req.session;
	res.render('single_player_index')
});

app.get('/singleplayer_st_louis', function(req, res){
	sess=req.session;
	res.render('singleplayer_st_louis');
})

app.get('/singleplayer_nyc', function(req, res){
	sess=req.session;
	res.render('singleplayer_nyc');
})

app.listen(app.get('port'), function(){
	console.log('Node app is running on port', app.get('port'));
})


//app.listen(process.env.PORT || 3000);