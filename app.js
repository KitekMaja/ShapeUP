var createError = require('http-errors');

var express = require('express');
var path = require('path');

var cookieParser = require('cookie-parser');
var logger = require('morgan');

var PORT = process.env.PORT || 4200;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var ingredientsRouter = require('./routes/food/ingredient');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/ingredients', ingredientsRouter)

const ingredients = require('./models/food/Ingredient');

app.listen(PORT, () =>
{
  console.log(`Strežnik teče in posluša na http://localhost:${PORT}`);
});

app.get('/', (request, response) => response.render('index', 
{
  name: "ShapeUp express app"
}));

//navigacija po spletnih straneh

app.get('/list_ingredients', (request, response) => response.render('ingredients_list', 
{
  name: "Ingredients", 
  description:"omg ingredients!",
  ingredients_list: ingredients.returnAllIngredients()
}));

app.get('/add_ingredient', (request, response) => response.render('ingredient_add',
{
  name: "Adding ingredient"
}))

//konec navigacije


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
