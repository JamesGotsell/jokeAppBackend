import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import { index } from './routes'


// mongoose.connect('mongodb://localhost/jokes ');
const app = express();

// route

app.get('/', (req,res) => {
    res.send('chuck norris joke express api to be used by the frontend')
});

app.use('/', index);


// app.get('/v1', index);

app.use(morgan('combined'))

const server = app.listen(3000, () => {
    const { address, port } = server.address();
    console.log(`Listening at http://${address}:${port}`);
})