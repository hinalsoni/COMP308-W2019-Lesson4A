let mongoose = require('mongoose');

// create a model class
let contactSchema = mongoose.Schema({
    favouriteThingName: String,
    description: String,
    
},
{
    collection: "favouriteThing"
});

module.exports = mongoose.model('hinal', contactSchema);