const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xssClean = require('xss-clean');
const UserController = require('./Controllers/UserController');

 const User = require('./Models/User');
 const Article = require('./Models/Article');

dotenv.config({path: './.env'});

const app = express();

app.use(helmet());

app.use(express.json());

if(process.env.NODE_ENV === 'development'){
   app.use(morgan('dev'));
}

const limit = rateLimit({
   max: 100, 
   windowMS: 60 * 60 * 1000, 
   message: 'To many requests from this IP, please try again in an just hour'
});

app.use('/api',limit);
app.use(mongoSanitize());
app.use(xssClean());


app.use(express.static(`${__dirname}/public`));
app.use(express.static(`${__dirname}/public/img/posts`));
app.use(express.static(`${__dirname}/public/img/users`));
 
app.use((req,res,next) => {
   console.log("middleware");
   next();
});

app.get('/',(req,res) => {
  const data = new Article().getFullname();
  res.json({
    data : {
       data
    }
  })
  
})

app.post('/api/user',UserController.create);
app.get('/api/users',UserController.index);
app.get('/api/user/:id',UserController.getById);



   
app.all('*',(req,res,next) => {
   //  next(new AppError(`Cant find ${req.originalUrl} on this server`,404)); 
});

// app.use(errorController);

module.exports = app;



