

const path = require('path')
const args = require('yargs').argv;

require('dotenv').config({
  path: path.resolve(process.cwd(), process.env.NODE_ENV + '.env' )
})


const persistence =  args.persistence || process.env.PERSISTENCE || 2
console.log(process.env)
module.exports = {
    NODE_ENV: process.env.NODE_ENV || 'development',
    HOST: process.env.HOST || 'localhost',
    PORT: args.port || process.env.PORT || '8080',
    PERSISTENCE: persistence,
    CLUSTER: args.cluster,
    SECRETJWT: process.env.SECRETJWT || 'secret',

    SESSION_TIME: args.sessionTime || 60 * 100,
    SESSION_SECRET: process.env.SESSION_SECRET || 'secret',

    MONGO_URL: process.env.MONGO_URL || 'mongodb://localhost:27017' ,
    MONGO_ATLAS_URL: process.env.MONGO_ATLAS_URL,
    MONGO_DBNAME: process.env.MONGO_DBNAME,


    GMAIL_USER: process.env.GMAIL_USER,
    GMAIL_PASS: process.env.GMAIL_PASS,

    TWILIO_ACCOUNT_SID: process.env.ACCOUNT_SID,
    TWILIO_AUTH_TOKEN: process.env.AUTH_TOKEN,
    TWILIO_WHATSAPP: process.env.WHATSAPP,
    TWILIO_NUMBER: process.env.NUMBER,
    TWILIO_ADMIN_NUMBER: process.env.ADMIN_NUMBER,
}
