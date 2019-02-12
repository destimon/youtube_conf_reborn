module.exports = function(io) {
  
  io.on('connection', (socket) => {
    // console.log('new socket');
    // socket.on('asd', (data) => {
    //   console.log(data);
    //   socket.emit('temp', {mes: 'temp from server'});
    // });
    // socket.on('click', (data) => {
    //   console.log(data);
    //   socket.emit('click_answer', {mes: 'thx for click'});
    // })
  })  
}