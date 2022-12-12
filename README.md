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
    console.log("Server up no porto: " + port);

}

//Define routes
require('./routes/routes.js')(server);//

//Initiate app
init();

server.route({
    method: 'GET',
    path: '/',
    handler: function (request, h) {

        var data = {
            msg: 'API calculator'
        };

        return data;
    }
});
