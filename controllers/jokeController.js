import request from 'request'
import Joke from '../models/joke';
const randomJoke ='https://api.chucknorris.io/jokes/random';

exports.jokeCall = (req , res) => {
    request( randomJoke , function(err, body) {
        if (res.statusCode == 200) {
            var parsedBody = JSON.stringify(body.body);
            console.log(parsedBody);
            res.send(parsedBody);
        }
    });
};

exports.saveJoke = async (req, res) =>  {
    const joke = await ( new Joke( req.body )).save();
    console.log('it worked');
}

/// controller to delete joke
exports.deleteJoke = async (req, res) =>  {
    // i need id of the joke to do the mongo query
    console.log('deleted joke ');
};
