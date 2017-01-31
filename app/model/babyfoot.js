const mongoose = require('mongoose');
var schema = mongoose.Schema;

module.exports = mongoose.model('babyfoot', new schema({
	createur: {type: String},
	playeur: {type: Numeric},
	lat: {type: String},
	lng: {type: String},
	status: {type: String}
	titre: {type: String},
	description: {type: String},
    image: {type: String}
}));