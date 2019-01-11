var http = require('http');

var mysql =  require('mysql');

 var connection =  mysql.createConnection({
  	host : "localhost",
  	user : "root",
  	password: "Ignacio05"
  });


  connection.connect();

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

  connection.query("use trucoweb");
  var strQuery = "select * from user";
  var i = 0;
  var c = '';
  connection.query( strQuery, function(err, rows){
    if(err)	{
      throw err;
    }else
      {

        //res.end("coneccionOK\n" + rows[0]["id"] );
          //numRows = results.;
        //res.write("coneccionOK");
        c += "coneccionOK\n";
        for(i=0;i<rows.length;i++)
          {

            c +=  rows[i]["id"] + " " + rows[i]["username"] +"\n";
          }

      res.end(c);
      //res.end(rows);
      console.log( 'Fin' );
    }
  });



}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');
