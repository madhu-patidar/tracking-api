var express = require('express');
var router = express.Router();

let models = require('../models');

var app = express();
const http = require("http");
const path = require("path");

var users = {}
var name = ''
    /* GET home page. */
router.get('/', function(req, res, next) {
    models.jhi_user.findAll({
        order: [
            ['first_name', 'DESC'],

        ],
    }).then(users => {
        // res.send(users)
        res.render('index', { title: 'Express12', users: users });

    });

});

// router.get('/:name', function(req, res) {
//     name = req.params.name;
//     res.sendFile(path.join(__dirname, "../views/index.html"));
//     // res.render('index');

// })


module.exports = router;