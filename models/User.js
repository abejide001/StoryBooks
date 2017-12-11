const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    googleID: {
        type: String,
        required: true
    },
    email: {
        type: String,
        requried: true
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    image: {
        type: String
    }
});

//Create collection and add schme
mongoose.model('users', userSchema);