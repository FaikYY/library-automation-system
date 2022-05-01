let express =  require("express");
let router =  require("../Route/BookRoute");

let app = express();

function run(){
    app.get("/", function (req, res) {
        res.send("Welcome to Library REST API");
    });
    
    app.use("/api", router);
    
    app.listen(3000);
    console.log("API is running at localhost:3000");
}

module.exports = {run};

