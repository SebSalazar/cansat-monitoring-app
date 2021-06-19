const serialPort = require("serialport");
const readline = require("readline");
const fs = require("fs");

const log = require("./csvlog");

let portList = [];
let dataArray = [];
let dataArrayAux = [];
let inUsePort;
let dummyMode = true;
const dataPath = "./data/data_simulacion.csv";

serialPort.list().then((ports) => {
  ports.forEach((port) => {
    portList.push(port.path);
  });
});

const leerData = async () => {
  if (fs.existsSync(dataPath)) {
    let read = readline.createInterface({
      input: fs.createReadStream(dataPath),
      output: process.stdout,
      console: false,
    });

    console.log("...Leyendo la data...");
    read.on("line", (line) => {
      dataArray.push(line.split(";"));
      dataArrayAux.push(line.split(";"));
    });
  }
};

module.exports = {
  leerData: leerData(),
  getPorts: portList,
  getPorts: () => {
    return new Promise((resolve, reject) => {
      serialPort.list().then((ports) => {
        portList = [];
        ports.forEach((port) => {
          portList.push(port.path);
        });
        resolve(portList);
      });
    });
  },
  setPort: (portName) => {
    console.log("Bienvenido: ", portName);
    return new Promise((resolve, reject) => {
      inUsePort = new serialPort(portName, { baudRate: 9600 }, (err) => {
        if (err) {
          log.error(err.message, " No hay hardware encontrado");
          reject("No hay dispositivos conectados, inicia el modo simulación: ");
          dummyMode = true;
        } else {
          dummyMode = false;
          resolve(inUsePort);
        }
      });
    });
  },
  port: inUsePort,
  getData: () => {
    console.log("Simulacion:\n", dummyMode);
    //console.log(dataArray);
    if (dummyMode) {
      if(dataArray.length === 0 || dataArray.length === undefined) dataArray = dataArrayAux;
      return dataArray.shift();
    } else {
      console.log("Puerto en uso, modo hardware");
      return inUsePort.read();
    }
  },
};
