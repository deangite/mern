import Express from 'express'
import path from 'path'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import compression from 'compression'


// Initialize the Express App
const app = new Express();

// Import required modules
import serverConfig from './config';

// Set native promises as mongoose promise
mongoose.Promise = global.Promise;

mongoose.connect(serverConfig.mongoURL, (error) => {
    if(error){
        console.log('Please make sure you mongodb is installed!')
        throw error;
    }
})

app.use(compression)
app.use(bodyParser.json({limit: '20mb'}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(Express.static(path.resolve(__dirname, '../dist/public')))
app.use('api', )