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

export default router;