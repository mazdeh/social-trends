var app = require("express")();
var querystring = require('querystring');
var cors = require("cors");
var request = require('request');
var OAuth   = require('oauth-1.0a');
// var Facebook = require('facebook-node-sdk');
// var Instagram = require('instagram-node-lib');

// blah start
app.use(cors());


// Instagram.set('client_id', '7655f4db45e6471093a2429cfaa97a76');
// Instagram.set('client_secret', '2308a3967867446a8437e85498f94b70');


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

      console.log("I'm req.url:", req.url)
      console.log("I'm req.params:", req.params)
      console.log("I'm query:", query)

      client.get(req.url, query, function(error, tweets, response){
        if (!error) 
        {
          res.send(tweets);
          console.log(response);
        }
        else{
          console.log("im in the error")
          res.send(error);
        }
      });

    }
    catch (ex){

      res.send("this is the catch");

    }

});
