var app = require("express")();
var querystring = require('querystring');
var cors = require("cors");
var request = require('request');
var OAuth   = require('oauth-1.0a');
var Facebook = require('facebook-node-sdk');

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

      client.get(req.url, params, function(error, tweets, response){
        if (!error) 
        {
          console.log("im here");
          res.send(tweets);
          console.log(response);
        }
        else {
          console.log("im in the error");
          res.send(error);
        }
      });

    }
    catch (ex){
      console.log(response);
      console.log(tweets);
      console.log(ex);
      res.send("this is the catch");

    }

});
