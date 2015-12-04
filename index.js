var express = require('express');
// requiring express engine

var app = express();
//calling the function that kicks off the whole server



// / root of webpage

//view engine

app.set('view engine', 'ejs');
// app.set("view engine", "jade");



//routes
app.get("/", function(req,res){
//any traffic we get to the server we are going to pass this function
//defining all get requests
// get request vs post requests
  var individual = 'mike'
  res.render("index", {"individual": individual});

});



app.get("/people/:name/:city/:state", function(req, res){
  var individual = req.params.name;
  var city = req.params.city;
  var state = req.params.state;

  res.render('people', {"state": state, "individual": individual, "city": city});
});

app.get("/profiles/:dinosaur", function(req, res){
  var dinosaur = req.params.dinosaur;
  res.render("profile", {"dinosaur": dinosaur});
});


//catch all at end
app.get("*", function(req, res){
  res.send("404 not found suckas");
});


//3000 port  any request that comes in do I know how to handle itls
//listener
app.listen(3000, function(){
  console.log("I am listening on port 3000. Recognize me.");
})
