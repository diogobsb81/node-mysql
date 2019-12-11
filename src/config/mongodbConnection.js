const mongoose = require('mongoose');
mongoose.Promise = Promise;

const mongodbUrl = config.get('mongodb://localhost:27017/shop');

module.exports = () => {
	return mongoose.connect(mongodbUrl, {
		useMongoClient: true
	});
};
