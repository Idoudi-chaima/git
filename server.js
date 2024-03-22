//utiliser la confi pour lancer le serveur

const http = require("http");
const app = require("./app");

const server = http.createServer(app);
server.listen(3000);