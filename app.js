const colors = require('colors');
const express = require('express');
const path = require('path');
const app = express();
const bodyparser = require('body-parser');
//const router = require('./routers/index');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');

//middlewares
app.use((req, res, next) => {
	console.log('request type: ',req.method);
	next();
});

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

//routers
//app.use(router);

//static files
app.use(express.static(path.join(__dirname,'public')));

//start the server
app.listen(app.get('port'), () => {
	console.log('server on port:',app.get('port'))
});