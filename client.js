const net = require("net");
const clientName = "Mo";


const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Emitted when connection is made.");
    conn.write(`Name: ${clientName}`);
  });


  conn.on("data", (data) => {
    console.log(`Emitted when data is received: ${data}`)
  });

  conn.on("end", () => {
    console.log("Emitted when server ends transmission.")
  });

  return conn;
};
module.exports = connect;