// const {Person} = require("./person");
const dotenv = require('dotenv')

const connectToDatabase = require('./src/database/connect');

dotenv.config();

connectToDatabase();
// require('./module/path')
// require('./module/fs')
// require('./module/http')

require("./module/express")

// const person = new Person("Diovan");
