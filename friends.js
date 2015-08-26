var app = require('express')().use(require('body-parser')()).use(require('cors')());

var friends = [];

// Create a new friends
app.post('/friends', function(req, res){
  if (!req.body.name || !req.body.city || !req.body.country ){
    return res.status(400).json({error : "Error - request should contain a name, city and country"});
  }
  friends.push(req.body);
  return res.json(req.body);
});

// list friends
app.get('/friends', function(req, res){
  return res.json(friends);
});

var server = app.listen(8080);

// test
// curl -X POST 'http://localhost:3000/friends/' -H 'Content-Type: application/json' -d '{"name": "mike", "country": "nz", "city": "Wellington"}'
// curl -X POST 'http://localhost:3000/friends/' -H 'Content-Type: application/json' -d '{"name": "steve", "country": "uk", "city": "London"}'
// curl -X POST 'http://localhost:3000/friends/' -H 'Content-Type: application/json' -d '{"name": "noel", "country": "au", "city": "Sydney"}'

// curl 'http://localhost:3000/friends/'