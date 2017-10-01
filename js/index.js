const express = require('express');
const path = require("path");
require('hbs');
const dateFormat = require('dateformat');
const now = new Date();


const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.static(path.resolve(__dirname, '../public/message-page-initial')));

app.get('/contact', (req, res) => {
    res.send({
        name: "Kea Events",
        email: "kea@mail.com",
        address: "Copenhagen"
    });
});

app.get('/contact', (req, res) => {
    res.send({
        name: "Kea Events",
        email: "kea@mail.com",
        address: "Copenhagen"
    });
});

app.get('/about', (req, res) => {
    res.render(path.resolve(__dirname, '../public/about.hbs'), {
        date: dateFormat(now, "dddd d. mmmm, yyyy")
    });
});

app.get('/message', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../public/message-page-initial/messagePage.html'));
});

app.listen(process.env.PORT || 8080, () => console.log('All is ok! Listening on port 8080'));