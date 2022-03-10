const express = require('express');
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
const { getCurrentUser } = require('../firebase/firebase.util');
const registerRouter = express.Router();

registerRouter.get('', (req, res) => {
    res.render('register', {
        error: "",
        display: "none"
    });
});
registerRouter.post('', (req, res) => {
    const { email, password, passwordConfirm } = req.body;

    if (password !== passwordConfirm) {
        res.render('register', {
            error: "Password does not match",
            display: "block"
        });
    }
    else {
        const auth = getAuth();

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                res.redirect("/")
            })
            .catch(err => {
                res.render('register', {
                    error: err,
                    display: "block"
                });
            });
    }
});

module.exports = registerRouter;
