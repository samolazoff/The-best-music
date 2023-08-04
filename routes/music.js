import { log } from "console";
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
router.get('/addmusic', (req, res) => {
    res.render('pages/addMusic',
        {
            title: "Add new Music",
        }
    );
});
router.post('/addmusic', (req, res) => {
    console.log(req.body);
    res.redirect('/music')
});

export default router;