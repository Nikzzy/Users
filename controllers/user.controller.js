const Users = require('./../models/user.model');

module.exports.findUsers = async (req, res) => {
    try {
        const users = await Users.find({});
        return res.status(200).send(users);
    } catch (error) {
        console.error(error.stack);
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
};

module.exports.createUser = async (req, res) => {
    try {
        const {
            name,
            age
        } = req.body;
    
        // Save the user to database
        const user = new Users({ name, age });
        const _user = await user.save();
    
        return res.status(201).send(_user.toObject());
    } catch (error) {
        console.error(error.stack);
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
};

module.exports.findUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findById(id);
        return res.status(201).send(user);
    } catch (error) {
        console.error(error.stack);
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
};

module.exports.deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await Users.findByIdAndDelete(id);
        return res.status(201).send(user);
    } catch (error) {
        console.error(error.stack);
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
};