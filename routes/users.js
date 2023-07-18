const router = require("express").Router();


router.get('/home', (req, res) =>{
    res.render('home');
})

router.get('/register', (req, res) =>{
    res.render('register');
})
router.get('/login', (req, res) =>{
    res.render('login');
})



module.exports = router;