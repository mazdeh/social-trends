var app = require("express")();
var querystring = require('querystring');
//var OAuth   = require('oauth').OAuth;
var cors = require("cors");
var request = require('request');
var OAuth   = require('oauth-1.0a');

// blah start
app.use(cors());

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: 'BJkI9dRkkTj14cH8udxBUqeJJ',
  consumer_secret: 'sNNCPQtGzUapE2z0KZr3NvUnqYtuG4wvLqddwMZ8CrmmoFlK9D',
  access_token_key: '299587768-xV5W4UpRO2qScwalNAXIyOYbGfViYPpRBRCSwhHM',
  access_token_secret: 'rB09j7jc68qtX6uCKcBDH5m0be2xPakdRVXhwQSerYtcP'
});


// creating a server
app.set('port', (process.env.PORT || 3000))

var server = app.listen(app.get('port'), function() {

    var host = server.address().address
    var port = server.address().port
    console.log('App listening at http://%s:%s', host, port)
})


app.get("/*", function(req, res) {

    try{

      client.get(req.url, null, function(error, tweets, response){
        if (!error) 
        {
          res.send(tweets);
        }
        else{
          res.send(error);
        }
        console.log(error);
      });

    }
    catch (ex){

      res.send("go do it your self ! ;)");

    }

});
