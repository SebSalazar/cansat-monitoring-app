const HTTP = require("http");
const WS = require("websocket").server;
const log = require("./helpers/csvlog");
const port = require("./helpers/communication");

const server = HTTP.createServer((req, res) => {
  let reqpath = req.url;

  if (RDI.hasOwnProperty(reqpath)) {
    reqpath = RDI[reqpath];
  }
  console.log(PATH + reqpath);
});

server.listen(3000, "127.0.0.1", 511, (params) => {
  console.log("listening");
  console.log(params);
});

const parseData = (client, clientId, msg) => {
  console.log(msg);
  if (msg != 1) {
    port
      .setPort(msg)
      .then((e) => {
        console.log("Ok");
        console.log(e);
      })
      .catch((e) => {
        console.log("error");
        console.log(e);
      });
  } else {
    port.getPorts().then((e) => {
      client.send(e);
    });
  }
};

const ws = new WS({
  httpServer: server,
});

let uid = 0;
ws.on("request", (req) => {
  const client = req.accept(null, req.origin);
  const clientId = uid++;

  console.log("new client");
  client.sendBuffer = [];
  client.clientId = clientId;

  client.on("message", (msg) => {
    let data;
    switch (msg.type) {
      case "utf8":
        data = msg.utf8Data;
    }
    parseData(client, clientId, data);
  });

  client.on("close", () => {
    console.log("client disconnected");
  });

  port.getPorts().then((e) => {
    client.send(e);
  });
});

const formatData = (d) => {
  let data = d.split(",");
  let a = {
    latitude: 0, //falta
    longitude: 0, //falta
    Altitude: data[1],
    falling: 0, //calcular
    Temperature_1: data[3],
    Temperature_2: 0, //falta
    Barometric_Pressure: data[4],
    pitch: data[5],
    rueda: data[6],
    yaw: data[7],
    Accelerometer_X: data[8],
    Accelerometer_Y: data[9],
    Accelerometer_Z: data[10],
    Speed: data[2], //calcular
  };
  return JSON.stringify(a);
};

const wsSendAll = () => {
  let data;
  try {
    data = port.getData();
    if (data != undefined && data != null) {
      data = data.toString();
      console.log(data);
      dataarray = formatData(data);
      log.save(data);
      for (const connection of ws.connections) {
        connection.send(dataarray);
      }
    }
    setTimeout(wsSendAll, 500);
  } catch (e) {
    console.log(e);
    log.error(e);
    setTimeout(wsSendAll, 100);
  }
};

setTimeout(wsSendAll, 500);
