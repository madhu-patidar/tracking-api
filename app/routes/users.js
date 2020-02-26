var express = require('express');
var router = express.Router();

let models = require('../models');

/* GET users listing. */
router.get('/', function(req, res, next) {
    models.jhi_user.findAll({
        order: [
            ['first_name', 'DESC'],
        ],
    }).then(users => {
        res.send(users)
    });
});

module.exports = router;