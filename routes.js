module.exports = function (server) {

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
