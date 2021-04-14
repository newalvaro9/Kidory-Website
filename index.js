const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require("path")

// Configure template Engine and Main Template File
app.engine('hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs'
}));
// Setting template Engine
app.set('view engine', 'hbs');

//static
app.use(express.static(path.join(__dirname, 'public')));

// routes

app.get('/discord', (req, res) => {
    res.redirect("https://discord.com/invite/pnwAKsu9Uw")
})

app.get('/vote', (req, res) => {
    res.render('vote')
})

app.get('/invite', (req, res) => {
    res.redirect("https://discord.com/oauth2/authorize?client_id=794159026908561418&scope=bot&permissions=3086")
})

app.get('/', (req, res) => {
    res.render('home');
});

app.get('*', (req, res) => {
    res.redirect('/');
});
 
// port where app is served
app.listen(3000, () => {
    console.log('The web server has started on port 3000');
});

//yep xd