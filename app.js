const express = require( 'express');
const cors = require('cors');
const mongoose =require( 'mongoose');
const app = express();
const PORT = process.env.PORT || 3000;
require('dotenv').config();

const expressRouter = require('./src/routes/routes')

app.use(cors());
app.use(express.json());



const uri = process.env.DB_URI;
mongoose.connect(uri, { useNewUrlParser: true ,useUnifiedTopology: true});

const connection = mongoose.connection;
connection.once('open',() => {
    console.log('MongoDB Connected')
})
connection.on('error',console.error.bind(console,"Não foi possivel conectar"))

app.use('/users', expressRouter)



app.listen(PORT,() =>{
    console.log(`EbbiBack is on in port ${PORT}`)
})
