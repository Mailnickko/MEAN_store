var Customer = mongoose.model('Customer');

module.exports = (function(){
	return {
		getAll: function(request, response){
			Customer.find({}, function(err, records){
				response.json(records);
			})
		},
		create: function(request, response){
			var customer = new Customer({ name: request.body.name });
			customer.save(function(err){
				if(err) { response.json(false); }
				else { response.json(true); }
			})
		},
		destroy: function(request, response){
			Customer.remove({_id: request.params.id}, function(err){
				if(err) { response.json(false); }
				else { response.json(true); }
			})
		}
	}	
})();