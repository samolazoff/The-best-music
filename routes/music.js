import { Router } from "express";

const router = Router();

router.get('/music', (req, res) => {
    res.render('pages/music',
        {
            title: "Music",
            isMusic: true
        }
    );
});

export default router;