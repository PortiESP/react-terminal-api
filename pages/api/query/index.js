const exec = require("child_process").exec

export default function handler(req, res) {

    console.log()
    exec("cd testenv;" + req.query.cmd, (stdin, stdout, stderr)=> res.status(200).json({ query: req.query.cmd, stdout, stdin, stderr}))   
    
    // Log
    exec(`echo "[${req.connection.remoteAddress}] - [${req.url}] - [${req.rawHeaders[req.rawHeaders.findIndex( h => h === "User-Agent")+1]}]" >> logs.txt`)
}
  