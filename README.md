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




calculator api to connect to this server
module.exports = function (server) {

    //route test
    server.route({
        method: 'GET',
        path: '/index.js',
        handler: function (pedido) {

            var data = {
                msg: 'API Calculator'
            };

            return data;
        }
    });

    //route Sum
    server.route({
        method: 'GET',
        path: '/sum/{num1}/{num2}',
        handler: function (pedido) {

            const num1 = parseInt(pedido.params.num1);
            const num2 = parseInt(pedido.params.num2);

            var data = {
                result: num1 + num2
            };

            return data;
        }
    });

    //route Subtraction
    server.route({
        method: 'GET',
        path: '/sub/{num1}/{num2}',
        handler: function (pedido) {

            const num1 = parseInt(pedido.params.num1);
            const num2 = parseInt(pedido.params.num2);

            var data = {
                result: num1 - num2
            };

            return data;
        }
    });
    //route Multiplication
    server.route({
        method: 'GET',
        path: '/mul/{num1}/{num2}',
        handler: function (pedido) {

            const num1 = parseInt(pedido.params.num1);
            const num2 = parseInt(pedido.params.num2);

            var data = {
                result: num1 * num2
            };

            return data;
        }
    });

    //route Division
    server.route({
        method: 'GET',
        path: '/div/{num1}/{num2}',
        handler: function (pedido) {

            const num1 = parseInt(pedido.params.num1);
            const num2 = parseInt(pedido.params.num2);

            var data = {
                result: num1 / num2
            };

            return data;
        }
    });
}


