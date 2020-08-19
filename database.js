const mongoose = require('mongoose');
require('dotenv/config');
const uri = process.env.DB_URI;
mongoose.connect(process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true });

const database = mongoose.connection;
database.once('open', () => console.log('MongoDB connected'))
database.on('error', console.error.bind(console, "Couldn't connect to database"))

module.exports = database