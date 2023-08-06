import { Router } from "express";
import { Schema, model } from "mongoose";

const userSchema = new Schema({
    login: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});
const User = model('User', userSchema);
const router = Router();

router.get('/login', (req, res) => {
    res.render('pages/login',
        {
            title: "login",
            isLogin: true
        }
    );
});
router.post('/login', (req,res) => {
    console.log(req.body);
    res.redirect('/')
});
router.get('/autoriz', (req, res) => {
    res.render('pages/autoriz',
        {
            title: "Add new user"
        }
    );
});
router.post('/autoriz', async (req, res) => {
    const user = new User({
        login: req.body.login,
        email: req.body.email,
        password: req.body.password
    });
    try {
        await user.save();
        console.log(req.body);
        res.redirect('/')
    } catch (error) {
        console.log(error);
    }
});

export default router;