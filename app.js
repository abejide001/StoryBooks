const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

//Load models
require('./models/User');

//Load keys
const keys = require('./config/keys');

//Map globals
mongoose.Promise = global.Promise;

//Connect to mongoose
mongoose.connect(keys.mongoURI, {
    //This is needed so I don't get a deprecated error
    useMongoClient: true 
})
 .then(() => console.log('mongoDB connected'))
 .catch(err => console.log(err));

const app = express();

//Passport config
require('./config/passport')(passport);

//Load routes
const auth = require('./routes/auth');
const index = require('./routes/index');
const stories = require('./routes/stories');

//Handlebars middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//Authentication middleware
app.use(cookieParser());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));

//Passport middleware
app.use(passport.initialize());
app.use(passport.session());

//Set global variable
app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Use routes
//Important to put routes on the bottom
app.use('/auth', auth);
app.use('/', index);
app.use('/stories', stories);

const port = process.env.PORT || 5500;

app.listen(port, () => {
    console.log(`Sever started on port ${port}`)
});