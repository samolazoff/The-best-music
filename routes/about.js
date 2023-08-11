import { Router } from "express";
import { Schema, model } from "mongoose";

const router = Router();

const pathSchema = new Schema({
    titlePath: {
        type: String,
        required: true
    },
    desPath: {
        type: String,
        required: true
    },
});

const Path = model('Path', pathSchema);

router.get('/about', async (req, res) => {
    const allPath = await Path.find(); 
    res.render('pages/about',
        {
            allPath,
            title: "About",
            isAbout: true
        }
    );
});
router.post('/path/add', async (req, res) => {
    const path = new Path({
        titlePath: req.body.path,
        desPath: req.body.pathDes
    })
    try {
        await path.save();
        res.redirect('/about')
    } catch (error) {
        console.log(error);
    }
});
router.get('/path/add', async (req, res) => {
    res.render('pages/addPath',
        {
            title: "Add new path",
            isAbout: true
        }
    );
});
export default router;