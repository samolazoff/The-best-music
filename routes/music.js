import { Router } from "express";
import fs from 'fs';
import {Schema, model } from "mongoose";

const router = Router();

const musicSchema =new Schema({
    album: {
        type: String,
        required: true
    },
    artist: {
        type: String,
        required: true
    },
    urlImg: {
        type: String,
        default: 'no image'
    },
    urlDescription: {
        type: String,
        default: 'no discription'
    },
    urlWiki: {
        type: String,
        default: 'no info'
    }
});

const Music= model('Music', musicSchema);

router.get('/music', async(req, res) => {
    const music= await Music.find();
    console.log(music[0].id);
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
router.post('/addmusic', async (req, res) => {
    const music = new Music({
        album: req.body.album,
        artist: req.body.artist,
        urlImg: req.body.img,
        urlDescription: req.body.description,
        urlWiki: req.body.link
    });
    try {
        await music.save();
        res.redirect('/music')
    } catch (error) {
        console.log(error);
    }
});

export default router;