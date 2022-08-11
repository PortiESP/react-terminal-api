const exec = require("child_process").exec

export default function handler(req, res) {

    const query = req.method === "GET" ? req.query: req.body

    console.log(req.method)
    console.log(query)


    exec("cd testenv;" + query.cmd, (stdin, stdout, stderr)=> res.status(200).json({ query: query.cmd, stdout, stdin, stderr}))   
    
    // Log
    exec(`echo "[${req.connection.remoteAddress}] - [${JSON.stringify(query)}] - [${req.rawHeaders[req.rawHeaders.findIndex( h => h === "User-Agent")+1]}]" >> logs.txt`)
}
  