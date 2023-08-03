import { Router } from "express";
import fs from 'fs';

const router = Router();

router.get('/', (req, res) => {
    const news=JSON.parse(fs.readFileSync('public/data/news.json', 'utf8'));
    res.render('pages/index',
        {
            news,
            title: "News",
            isHome: true
        }
    );
});

export default router;