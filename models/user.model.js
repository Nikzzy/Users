const mongoose = require('mongoose');

// const Schema = mongoose.Schema;
const { Schema } = mongoose;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        trim: true
    }
}, {
    collection: 'Users',
    timestamps: true,
});

const UserModel = mongoose.model('Users', UserSchema);

module.exports = UserModel;
