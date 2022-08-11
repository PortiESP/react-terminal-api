# Terminal API

Make GET/POST queries and get the response form a remote terminal with bash

> This tool should be self hosted, clone the repo, install the packages and run in you own server

## Usage steps

**Clone the repo**

```sh
git clone https://github.com/PortiESP/react-terminal-api.git
cd react-terminal-api
```

**Install dependencies**
```sh
npm install -y
```

**Build APP**
```sh
npm run build
```

**Start APP**
```sh
npm run start
```

## Endpoint 

To make a execute a commant make a query to `<hostname>:<port>/api/query` where the hostname and port will be the ones of the server where is hosted the app

## Query

The API will execute the commands from the value of the `cmd` key of the request object

*For the exampe, curl is used to make the example requests*

***GET Method example***
```sh
# Executing 'whoami' as the example command
curl 192.168.1.16:3000/api/query?cmd=whoami
```

***POST Method example***
```sh
# Executing 'whoami' as the example command
curl -X "POST" -d "cmd=whoami" 192.168.1.16:3000/api/query
```

## Response

The API will respond with an object with the following data: (*query, stdout, stdin, stderr*)

```sh
# Response for the 'whoami' example
{
    query: "whoami",
    stdout: "ec2-user
    ",
    stdin: null,
    stderr: ""
}
```

## Scripts

Here I've crafted two script to start & stop the app in background

### StartApp

This script will start the app in the port `3000` and in background, also the console logs will be save is `sessionLogs.txt` 
```sh
npm run start > sessionLogs.txt &
```

### StopApp

This script will math the PID of the process and close it based on the port: `3000`
```sh
kill $(ss -tupln | grep 3000 | awk -F 'pid=' '{print $2}' | cut -d "," -f 1)
```