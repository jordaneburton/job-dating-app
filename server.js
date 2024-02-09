const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers'); IF WE DO NEED THIS THEN WE CAN UNCOMMENT LATER
const sequelize = require('./config/connections');

const app = express();
const PORT = process.env.PORT || 3001;

// const hbs = exphbs.create({ helpers }); ALSO FOR HELPERS

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
});