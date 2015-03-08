var app = require("express")();
var querystring = require('querystring');
var cors = require("cors");
var request = require('request');
var OAuth   = require('oauth-1.0a');
var Facebook = require('facebook-node-sdk');




// blah start
app.use(cors());

app.configure(function () {
  app.use(Facebook.middleware({appID: '1638123243082958', secret: 'b5de961c3f2e0bcbfab48e11f08b6f02'}));
})

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


app.get("/", Facebook.loginRequired(), function (req, res) {
  req.facebook.api('/me', function(err, user) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, ' + user.name + '!');
  });
});

app.get("/*", function(req, res) {

    try{

      client.get(req.url, null, function(error, tweets, response){
        if (!error) 
        {
          console.log("im here")
          res.send(tweets);
          cnosole.log(response)
        }
        else{
          console.log("im in else")
          res.send(error);
        }
        console.log("im in else")
        console.log(error);
      });

    }
    catch (ex){

      res.send("go do it your self ! ;)");

    }

});
