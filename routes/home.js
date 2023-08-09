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

router.get('/', async (req, res) => {
    const news= await News.find();
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

router.post('/news/remove', async (req, res) => {
     try {
         await News.deleteOne({
            _id: req.body.deleteNewsId
         });
         res.redirect('/');
     } catch (error) {
         console.log(error);
     }
 });

export default router;