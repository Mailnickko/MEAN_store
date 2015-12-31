var customers = require('../controllers/customers.js')
var orders = require('../controllers/orders.js')

module.exports = function(app) {

	app.get('/customers', function(request, response) { customers.getAll(request, response) })
	app.post('/customers', function(request, response) { customers.create(request, response) })
	app.delete('/customers/:id', function(request, response) { customers.destroy(request, response) })

	app.get('/orders', function(request, response) { orders.getAll(request, response) })
	app.post('/orders', function(request, response) { orders.create(request, response) })

};