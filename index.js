import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import fs from 'fs';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(expressEjsLayouts);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');

app.use(express.static( "public"));


app.get('/', (req, res) => {
    const news=JSON.parse(fs.readFileSync('public/data/news.json', 'utf8'));
    res.render('pages/index',
        {
            news,
            title: "News",
            isHome: true
        }
    );
});
app.listen(PORT, () => {
    console.log(`Server is runnig: ${PORT}`);
});
