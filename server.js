const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// app
const app = express();

// let pos_provision_route = require('./routes/pos_provision.route');
// let test_route = require('./routes/test.route');

// db
// mongoose
//     .connect(process.env.DATABASE_LOCAL, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false })
//     .then(() => console.log('DB connected'))
//     .catch(err => {
//         console.log(err);
//     });

// middlewares
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());

const corsOptions = {
    origin: (origin, callback) => {
        callback(null, true);
    }
};
// here is the magic
app.use(cors(corsOptions));
// cors
// if (process.env.NODE_ENV === 'development') {
//     app.use(cors({ origin: `${process.env.CLIENT_URL}` }));
// }

// app.use('/api', pos_provision_route);
// app.use('/api/test', test_route);

// port
const port = process.env.PORT || 80;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});