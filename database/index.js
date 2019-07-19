//Connect to Mongo database
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

//your local database url
//27017 is the default mongoDB port
//const uri = 'mongodb://localhost:27017/user-passport' 

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/user-passport"
);

//const uri = 'mongodb://localhost:27017/user-passport' 

//mongoose.connect(uri).then(
  //  () => { 
        /** ready to use. The `mongoose.connect()` promise resolves to undefined. */ 
    //    console.log('Connected to Mongo');
        
    //},
    //err => {
         /** handle initial connection error */ 
      //   console.log('error connecting to Mongo: ')
        // console.log(err);
         
        //}
  //);


module.exports = mongoose.connection