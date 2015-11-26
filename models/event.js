var mongoose = require('mongoose');

var eventSchema = new mongoose.Schema({
      name: string,
      location: string,
      description: string
});

module.exports =mongoose.model('Event',eventSchema);
