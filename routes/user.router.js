const express = require('express');
const dependencies = require('./router.dependencies');

const router = express.Router();

router.get('/', dependencies.user.findUsers);
router.get('/:id', dependencies.user.findUser);
router.post('/', dependencies.user.createUser);
router.delete('/:id', dependencies.user.deleteUser);

module.exports = router;
