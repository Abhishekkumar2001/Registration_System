const router = require("express").Router();
const User = require('../models/User');


router.get('/home', (req, res) =>{
    res.render('home');
})

router.get('/register', (req, res) =>{
    res.render('register');
})
router.get('/login', (req, res) =>{
    res.render('login');
})

// To register a user
router.post('/register', async(req, res) =>{
    //Validation the data

    //checking if email exists
    const emailExist = await User.findOne({email : req.body.email});
    if(emailExist) return res.status(400).send("This email ID already exists");

    //hash the password

    //Create the user
    const newUser = new User({
        username : req.body.username,
        email : req.body.email,
        password : req.body.password
    })

    //Save to the DB

    try{
       const userData = await newUser.save();
       res.status(201).render('login');
    }
    catch(err){
        res.status(500).send(err);
    }
})



module.exports = router;