import express from "express";
import expressEjsLayouts from "express-ejs-layouts";
import path from 'path';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(expressEjsLayouts)
app.set('layout', './layout/main')
app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('pages/index');
});

app.listen(PORT, () => {
    console.log(`Server is runnig: ${PORT}`);
});