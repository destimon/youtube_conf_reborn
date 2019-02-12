const Room = require('../models/room');
const User = require('../models/user');
const shortid = require('shortid');

module.exports = function(app) {

  // user
  app.get('/api/user', (req, res) => {
    res.json(req.user);
  })

  // users
  app.get('/api/users/:displayName', (req, res) => {
    User.findOne({displayName: req.params.displayName}, (data) => {
      res.json(data);
    })
  })

  app.get('/api/users', (req, res) => {
    User.find({}, (data) => {
      res.json(data);
    })
  })

  // rooms
  app.get('/api/rooms/:roomid', (req, res) => {
    Room.findOne({roomid: req.params.roomid}, (data) => {
      res.json(data);
    })
  })

  app.get('/api/rooms', (req, res) => {
    Room.findOne({}, (data) => {
      res.json(data);
    })
  })

  app.post('/api/rooms', (req, res) => {
    let token = shortid.generate();

    Room.findOne({roomid: token}, (data) => {
      if (!data) {
        data = new Room({
          roomid: token,
          creator: req.user,
          members: [{ nickname: req.user }]
        })
      }
    })
  })
}