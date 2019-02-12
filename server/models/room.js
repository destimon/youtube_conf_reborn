let mongoose			= require('mongoose');

let roomSchema = mongoose.Schema({

    roomid:     String,
    creator:    String,
    members:    [{
      nickname: String,
    }]
});

// create model
module.exports = mongoose.model('Room', roomSchema);