var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
	name: { type: String, trim: true },
	product: { type: String, trim: true },
	quantity: { type: Number, min: 1, max: 10 },
	createdAt: { type: Date, default: Date.now() }
});

mongoose.model('Order', OrderSchema);
OrderSchema.path('name').required(true, "Name required!");
OrderSchema.path('product').required(true, "Product required!");
OrderSchema.path('quantity').required(true, "Quantity required!");
