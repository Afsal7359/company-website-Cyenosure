const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const expressEjsLayouts = require('express-ejs-layouts');
const AdminRouter = require('./routes/admin');
const usersRouter = require('./routes/user');
const dotenv = require('dotenv');
const session = require('express-session');
const mongoose = require('mongoose');
const Grid = require('gridfs-stream');
const bodyParser = require('body-parser');
const app = express();

dotenv.config();
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(expressEjsLayouts);
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({ resave: false, saveUninitialized: true, secret: "key", cookie: { maxAge: 500000 } }));

app.use('/admin', AdminRouter);
app.use('/', usersRouter);

// Establish the MongoDB connection first
mongoose.connect(process.env.MONGO_URL).then(() => {
  // The MongoDB connection is open, now set up GridFS
  setupGridFS();
}).catch((error) => {
  console.log(`Database connection error: ${error}`);
});

// Create a GridFS stream
let gfs;

function setupGridFS() {
  gfs = Grid(mongoose.connection.db, mongoose.mongo);

  // Define your GridFS model
  const GridFSModel = mongoose.model('GridFSModel', new mongoose.Schema({}));
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

// Export the GridFS instance for use in other modules if needed
module.exports = { app, gfs };
