import { Router } from "express";

const router = Router();

router.get('/about', (req, res) => {
    res.render('pages/about',
        {
            title: "About",
            isAbout: true
        }
    );
});

export default router;