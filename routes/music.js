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
router.post('/music/remove', async (req, res) => {
    try {
        await Music.deleteOne({
            _id: req.body.deleteMusicId
        });
        res.redirect('/music')
    } catch (error) {
        console.log(error);
    }
});
router.get('/music/edit/:id', async (req, res) => {
    const music = await Music.findById(req.params.id);
    try {
        res.render('pages/editMusic',
        {
            music,
            title: `Edit music album: ${music.album}`,
        }
    );
    } catch (error) {
        console.log(error);
    }
    
});
router.post('/music/edit', async (req, res) => {
    const id = req.body.musicId;
    console.log(id);
    try {
        await Music.findByIdAndUpdate(id, 
            {
                album: req.body.album,
                artist: req.body.artist,
                urlImg: req.body.img,
                urlDescription: req.body.description,
                urlWiki: req.body.link
            }
            );
        res.redirect('/music')
    } catch (error) {
        console.log(error);
    }
    
});

export default router;