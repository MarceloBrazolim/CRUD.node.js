const express = require("express");
const server = express();
server.use(express.json());

const users = ["hiro", "sherlott", "haiyori", "test", "test1"];

server.use((req, res, next) => {
    console.time("Request");
    console.log(`Method ${req.method}; URL: ${req.url}; `); // logs the method used

    next()

    console.log("Finished");
    console.timeEnd("Request");
})

function checkUserInArray(req, res, next) {
    const user = users[req.params.index]; // checks if there is a registered entry in the index
    if (!user) {
        return res.status(400).json({ error: "user does not exists" });
    }
    req.user = user;
    return next(); // calls next operation to be executed
}
function checkUserExists(req, res, next) {
    if (!req.body.name) { // checks if the json entry name is valid
        return res.status(400).json({ error: "user name is required" });
    }
    return next(); // calls next operation to be executed
}


server.get("/users", (req, res) => {
    return  res.json(users); // exhibits the whole array as json
})

server.get("/users/:index", checkUserInArray, (req, res) => {
    return res.json(req.user); // exhibits only one element in the array as json
})

server.post("/users", checkUserExists, (req, res) => {
    const { name } = req.body;
    users.push(name); // attributes the received element in the last position of the array
    return res.json(users);  // exhibits the whole array as json
});

server.put("/users/:index", checkUserInArray, checkUserExists, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;
    users[index] = name;
    return res.json(users); // exhibits only one element in the array as json
})

server.delete("/users/:index", checkUserInArray,  (req, res) => {
    const { index } = req.params;
    users.splice(index, 1); // cycles the array and removes n elements from the array index
    return res.send(); // updates only one element in the array
})

server.listen(3000); // defines the port and establishes connection to the server
