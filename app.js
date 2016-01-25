var cool = require('cool-ascii-faces');
var express = require('express');
var session = require('express-session');
var app = express();
var bodyParser = require('body-parser');
var bcrypt = require('bcrypt');
var MongoClient = require('mongodb').MongoClient;
var bodyParser = require('body-parser')
var MongoStore = require('connect-mongo')(session)

var authenticateUser = function(email, password, callback){
	db.collection('users').findOne({email: email}, function(err, data){
		if (err) {throw err;}
		bcrypt.compare(password, data.password, function(err, passwordsMatch){
			if (passwordsMatch){
				callback(data);
			} else {
				callback(false);
			}
		})
	});
};
// Configuration
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/bower_components'));
app.set('view engine', 'ejs')
app.set('trust proxy', 1)

app.use(function(req, res, next){
	console.log(req.method, req.url, '\n body:', req.body, '\n session:', req.session);
	console.log('change')
	next();
})
var mongoUrl = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/dice';
app.use(session({
	secret: 'superdupersecret',
	store: new MongoStore({ url: mongoUrl })
}));

// db
var db;
var sess;
var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectId;
MongoClient.connect(mongoUrl, function(err, database) {
  if (err) { throw err; }
  db = database;
  process.on('exit', db.close);
});

app.get('/', function(req, res){
	// sess=req.session;
	
	// if(sess.email){
	// 	res.redirect('/welcome');
	// } else {
		res.render('root')
	//}
});

app.get('/root', function(req, res){
	res.render('root');
})

app.get('/cool', function(req, res){
	res.send(cool());
})

app.get('/signup', function(req, res){
	res.render('signup');
})

app.post('/signup', function(req, res){
	bcrypt.genSalt(8, function(err, salt){
		bcrypt.hash(req.body.password, salt, function(err, hash){
			var newuser = {};
			newuser.name = req.body.name
			newuser.email = req.body.email
			newuser.username = req.body.username
			newuser.password = hash;
			newuser.bankRoll = 1000
			db.collection('users').insert(newuser)
			db.collection('users').find({email: newuser.email}), function(err, data){
				req.session.name = data.username
				req.session.userId = data.__dirname
				console.log(data.username)
			}
		})
	res.redirect('/welcome')
	})
})

app.get('/login', function(req, res){
	res.render('login')
})

app.post('/login', function(req, res){
	authenticateUser(req.body.email, req.body.password, function(user){
		if (user){
			req.session.email = user.email;
			req.session.userId = user._id;
		}
		res.redirect('/welcome')
	})
});

app.get('/welcome', function(req, res){
	var sess = req.session
	res.write('<h1>Hello ' +sess.email+'</h1>');
	res.write('<a id=one-player href="/singleplayer">One Player</a><br>');
	res.write('<a id=one-player href="/multiplayer">Two Player(coming soon)</a><br>');
	res.end('<a href="/logout">Logout</a>');
	
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
	//sess=req.session;
	res.render('single_player_index')
});

app.get('/singleplayer_st_louis', function(req, res){
	//sess=req.session;
	res.render('singleplayer_st_louis');
})

app.get('/singleplayer_nyc', function(req, res){
	//sess=req.session;
	res.render('singleplayer_nyc');
})
 


app.listen(process.env.PORT || 3000);