const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/back-end', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
      });
      console.log("Connect to success !");
    } catch (error) {
        console("ERROR: ",error);
    }
}

module.exports = { connect,  };