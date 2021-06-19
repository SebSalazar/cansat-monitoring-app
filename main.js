require("dotenv").config();
// const HTTP = require("http");
// const WS = require("websocket").server;
const express = require("express");

const app = express();
// const log = require("./helpers/csvlog");
// const port = require("./helpers/communication");
const puerto = process.env.PUERTO || 8081;
// const puertoServer = process.env.PUERTO_SERVER || 3000;

// const server = HTTP.createServer((req, res) => {
//   let reqpath = req.url;

//   if (RDI.hasOwnProperty(reqpath)) {
//     reqpath = RDI[reqpath];
//   }
//   console.log(PATH + reqpath);
// });

// --- Servir contenido estatico del front---
app.use(express.static("public"));

app.get("*", (req, res) => {
  res.sendFile(__dirname + "/public/404.html");
});

app.listen(puerto, () => {
  console.log("Servidor app esta escuchando");
});

app.listen(process.env.PUERTO_SERVER || 3000, '0.0.0.0' || '::', err => {
  console.log("Server escuchando");
})
//--- Cierra parte del frontend ---

// server.listen(puertoServer, () => {
//   console.log("Servidor server esta escuchando");
// });

// const parseData = (client, clientId, msg) => {
//   console.log(msg);
//   if (msg != 1) {
//     port
//       .setPort(msg)
//       .then((e) => {
//         console.log("Ok");
//         console.log(e);
//       })
//       .catch((e) => {
//         console.log("error");
//         console.log(e);
//       });
//   } else {
//     port.getPorts().then((e) => {
//       client.send(e);
//     });
//   }
// };

// const ws = new WS({
//   httpServer: server,
// });

// let uid = 0;
// ws.on("request", (req) => {
//   const client = req.accept(null, req.origin);
//   const clientId = uid++;

//   console.log("new client");
//   client.sendBuffer = [];
//   client.clientId = clientId;

//   client.on("message", (msg) => {
//     let data;
//     switch (msg.type) {
//       case "utf8":
//         data = msg.utf8Data;
//     }
//     parseData(client, clientId, data);
//   });

//   client.on("close", () => {
//     console.log("client disconnected");
//   });

//   port.getPorts().then((e) => {
//     client.send(e);
//   });
// });

// const formatData = (d) => {
//   let data = d.split(",");
//   let a = {
//     latitude: `${data[0]}`,
//     longitude: `${data[1]}`,
//     Altitude: `${data[2]}`,
//     falling: `${data[3]}`,
//     Temperature_1: `${data[4]}`,
//     Temperature_2: `${data[5]}`,
//     Barometric_Pressure: `${data[6]}`,
//     pitch: `${data[7]}`,
//     rueda: `${data[8]}`,
//     yaw: `${data[9]}`,
//     Accelerometer_X: `${data[10]}`,
//     Accelerometer_Y: `${data[11]}`,
//     Accelerometer_Z: `${data[12]}`,
//     Speed: `${data[13]}`,
//   };
//   return JSON.stringify(a);
// };

// const wsSendAll = () => {
//   let data;
//   try {
//     data = port.getData();
//     if (data != undefined && data != null) {
//       data = data.toString();
//       console.log(data);
//       dataarray = formatData(data);
//       log.save(data);
//       for (const connection of ws.connections) {
//         connection.send(dataarray);
//       }
//     }
//     setTimeout(wsSendAll, 500);
//   } catch (e) {
//     console.log(e);
//     log.error(e);
//     setTimeout(wsSendAll, 100);
//   }
// };

// setTimeout(wsSendAll, 500);
