const http = require('http')    //Pull in a useful node package

const hostname = process.env.hostname || '127.0.0.1'    //get our ip address from the environment
const port = process.env.port || 3001               //and the port

const server =
    http.createServer(            //Creates the response loop
        (req, res) => {               //Anonymous function to handle the request
            if (req.method === 'GET') {

                var array = ['Lion', 'Tiger', 'Giraffe', 'Cheetha', 'Elephant', 'Wolf'];
                var item1 = array[Math.floor(Math.random() * array.length)];
                var item2 = array[Math.floor(Math.random() * array.length)];

                res.statusCode = 200      //code for OK
                res.setHeader('Content-Type', 'json')
                res.setHeader('Access-Control-Allow-Origin', '*') //Set the mime type
                res.write('{ "Item1" : "'+item1+'", "Item2" : "'+item2+'"}');
                // res.write("Item1 => " + item1 + "\n");
                // res.write("Item2 => " + item2);
                res.end();

            } else {
                console.log("Status 404")
                res.statusCode = 404;
                res.end();
            }

        }
    )

server.listen(port, hostname, () => {   //Start the server
    console.log(`Server running at http://${hostname}:${port}/`)  //Log the request
})