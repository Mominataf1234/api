//Framework hapi.js
// const express = require("express");
// const app = express();
// const hbs = require('hbs');

// const path = require("path");

// const port = process.env.PORT || 3000;

// const static_path = path.join(__dirname, "/partials");
// const routes = path.join(__dirname, "/partials");

// app.use(express.static(static_path));
// app.set('view engine', 'hbs');
// app.set('views', routes);
// hbs.registerPartials(routes);


// app.get("/", (req, res) => {
//     res.render(routes);
// })

// app.listen(port, () => {
//     console.log(`server running on the ${port}`);
// })

const Hapi = require('hapi');

// logic port and machine
const host = 'localhost';
const port = 8000;

// Create Server
const server = Hapi.Server({
    host: host,
    port: port
});

// Initiate Server
const init = async () => {

    await server.start();
    console.log("Server up on port: " + port);

}

//Define routes
require('routes.js')(server);//

//Initiate app
init();

