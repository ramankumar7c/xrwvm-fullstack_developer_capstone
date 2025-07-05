/* jshint esversion: 8 */
/* jshint node: true */

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DealershipSchema = new Schema({
	"id": 0,
	"city": "",
	"state": "",
	"st": "",
	"address": "",
	"zip": "",
	"lat": 0,
	"long": 0,
	"short_name": "",
	"full_name": ""
});

module.exports = mongoose.model('Dealership', DealershipSchema);
