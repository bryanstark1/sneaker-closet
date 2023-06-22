const mongoose = require('mongoose');

mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('connected', (() => {
  console.log(`Conncted to MongoDB ${db.name} at ${db.host}:${db.port}`);
}));