var Order = mongoose.model('Order');

module.exports = (function(){
	return {
		getAll: function(request, response){
			Order.find({}, function(err, records){
				response.json(records);
			})
		},
		create: function(request, response){
			var order = new Order({
								name: request.body.name,
								product: request.body.product,
								quantity: request.body.quantity
								});
			order.save(function(err){
				if(err) { response.json(false); }
				else { response.json(true); }
			})
		}
	}	
})();