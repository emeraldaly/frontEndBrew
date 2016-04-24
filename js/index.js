var config = JSON.parse(data);
app.get('/',function(req,res){
  var page = fs.readFileSync("./firebasesimplelogin.html", "utf8", function(err,data){
    if(err) throw err;
});   