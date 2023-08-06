import { Router } from "express";
import fs from 'fs';
import { Schema, model } from "mongoose";

const newsShema = new Schema({
    date: {
        type: String,
        required: true
    },
    news: {
        type: String,
        required: true
    },
});
const News = model('News', newsShema);
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
router.get('/addnews', (req, res) => {
    res.render('pages/addNews',
        {
            title: "Add new News"
        }
    );
});
router.post('/addnews', async (req, res) => {

   const news = new News({
        date: req.body.date,
        news: req.body.news 
    });
    try {
        await news.save();
        res.redirect('/');
    } catch (error) {
        console.log(error);
    }
});

export default router;