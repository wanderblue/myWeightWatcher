const express = require('express')
const mongoose = require ("mongoose");
const routes= require ("./routes")
const bodyParser = require('body-parser')
const morgan = require('morgan')
const session = require('express-session')
const dbConnection = require('./database') 
const MongoStore = require('connect-mongo')(session)
const passport = require('./passport');
const app = express()
// const PORT = 8080
const PORT = process.env.PORT || 3001;
// Route requires
//const user = require('./routes/user')



// Define middleware here
//app.use(express.urlencoded({ extended: true }));
//app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
//app.use(routes)



// MIDDLEWARE
app.use(morgan('dev'))
app.use(
	bodyParser.urlencoded({
		extended: false
	})
)
app.use(bodyParser.json())

// Sessions
app.use(
	session({
		secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
		store: new MongoStore({ mongooseConnection: dbConnection }),
		resave: false, //required
		saveUninitialized: false //required
	})
)

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser

app.set('trust proxy', 1)

// Routes
// Define API routes here
app.use(routes)

// Routes
//app.use('/user', user)

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/user-passport", {useNewUrlParser: true});

// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})
