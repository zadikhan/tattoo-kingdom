var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/harrykart', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//db.once('open', function () {
  //  console.log("we are sorry for the inconveniance cause ")
//});

var kittySchema = new mongoose.Schema({
    name: String
});

kittySchema.methods.speak = function () {
    var greetings = "my name is " + this.name 
    console.log(greetings);
}


var Kitten = mongoose.model('harryKitty', kittySchema);

var harryKitty = new Kitten({ name: 'azam khan here' });

//console.log(harryKitty.name);
//harryKitty.speak();

harryKitty.save(function (err,harryKitty){
    if(err) return console.error(err);
    harryKitty.speak();
});