var mongoose = require('mongoose');
mongoose.connect('mongodb://johnny:DVz-zK4-rNx-23c@ds013559.mlab.com:13559/makersbnb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('successfull connection to makers-bnb-development db')
});
