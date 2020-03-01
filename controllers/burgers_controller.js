var express = require("express");

var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    burger.all(function (burgerData) {
        res.render("index", { burger_data: burgerData });
    });
});


router.post("/burgers/create", function (req, res) {

    burger.create(req.body.burger_name, function (result) {
        console.log(result);
        res.redirect("/");
    });

});


router.delete('/api/burger/:_id', function (req, res) {
    var id = req.params._id;
    burger.delete(id, function (err, burger) {
        if (err) {
            throw err;
        }
        res.redirect("/");
    });
});



router.put("/burger/:id", function (req, res) {
    burger.update(req.params.id, function (result) {
        console.log(result);

        res.sendStatus(200);

    });

});

module.exports = router;
