import { Router } from "express";

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
})

export default router;