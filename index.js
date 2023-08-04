import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import bodyParser from "body-parser";

import homeRoutes from './routes/home.js';
import aboutRoutes from './routes/about.js';
import musicRoutes from './routes/music.js';
import loginRoutes from './routes/login.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(expressEjsLayouts);
app.set('layout', './layout/main');
app.set('view engine', 'ejs');

app.use(express.static( "public"));

app.use(homeRoutes);
app.use(aboutRoutes);
app.use(musicRoutes);
app.use(loginRoutes);

app.listen(PORT, () => {
    console.log(`Server is runnig: ${PORT}`);
});
