/* jshint esversion: 8 */
/* jshint node: true */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
	"id": 0,
	"name": "",
	"dealership": "",
	"review": "",
	"purchase": "",
	"purchase_date": "",
	"car_make": "",
	"car_model": "",
	"car_year": 0
});

module.exports = mongoose.model('Review', ReviewSchema);
