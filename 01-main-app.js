const express = require("express");
/*  */const bodyParser = require("body-parser"); // Nowadays I can just use "express.json"
const app = express();

const PORT = 7777;


app.use((req, res, next) => {
  console.log(">>> " + req.method +": " + req.url);
  next();
} );

// Simple express static server
app.use(express.static('./public'));

// make a static subfolder
app.use('/test/static-folder', express.static('./test'));

/*  */ app.use(express.urlencoded({extended: true }) ); // since this is a middleware, I can also apply it before app.post

app.post("/", /* bodyParser.json(), */ (req, res) => {
  //FAILED TO GET A POST RESPONSE. GETTING EMPTY {}. Maybe that's because my index file is in express.static, not a .get route. Will get back to this later
  // SOLVED by replacing bodyParser with express.urlencoded({extended: true})
  console.log(req.body);
});
app.listen(PORT, () => console.log(`Server URL: ${PORT}`));