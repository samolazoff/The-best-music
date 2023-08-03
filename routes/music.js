import { Router } from "express";
import fs from 'fs';

const router = Router();

router.get('/music', (req, res) => {
    const music=JSON.parse(fs.readFileSync('public/data/music.json', 'utf8'));
    res.render('pages/music',
        {
            music,
            title: "Music",
            isMusic: true
        }
    );
});

export default router;