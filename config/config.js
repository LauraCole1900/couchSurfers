require('dotenv').config();
module.exports = {
  'development': {
    'username': process.env.DB_USER,
    'password': process.env.DB_PASS,
    'database': process.env.travel_db,
    'host': process.env.DB_HOST,
    'port': process.env.localhost,