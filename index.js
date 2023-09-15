import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 8080;
var con =0;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs",{
        con : con
    });
});



app.post("/ans",(req,res) => {
    var degree=req.body.degree;
    
    if(req.body.type=="celcius"){
       con=(( degree -32 ) * 5)/9;
       con = con.toFixed(3);
    }
    else{
       con=(degree * 9/5) + 32;
       con = con.toFixed(3);
     }

    res.redirect("/")

});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });