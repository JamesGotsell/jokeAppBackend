import mongoose, { Schema } from 'mongoose';

// Define movie schema
var jokeSchema = new Schema({
    value: String,
    id: String
});

export default mongoose.model('joke', jokeSchema)
