const net = require("net");
const clientName = "M_W";


const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Connection is made.");
    conn.write(`Name: ${clientName}`);
    // setTimeout(() => {
    //   conn.write("Move: down");
    // }, 500)
  });


  conn.on("data", (data) => {
    console.log(`Emitted when data is received: ${data}`);

  });

  conn.on("end", () => {
    console.log("Emitted when server ends transmission.")
  });

  return conn;
};
module.exports = connect;
