/* jshint esversion: 8 */
/* jshint node: true */

const { MongoClient } = require('mongodb');

const uri = "mongodb://mongo_db:27017/";

const client = new MongoClient(uri);

const database = client.db('dealershipsDB');

module.exports = database;
