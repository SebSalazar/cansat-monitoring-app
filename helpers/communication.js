const serialPort = require("serialport");
const log = require("./csvlog");

let portList = [];
let inUsePort;
let dummyMode = true;

serialPort.list().then((ports) => {
  ports.forEach((port) => {
    portList.push(port.path);
  });
});

module.exports = {
  getPorts: portList,
  getPorts: () => {
    return new Promise ( (resolve, reject) => {
      serialPort.list().then((ports) => {
        portList = [];
        ports.forEach( (port) => {
          portList.push(port.path);
        });
        resolve(portList);
      });
    });
  },
  setPort: (portName) => {
    try {
      inUsePort.close( (err) => console.log("Port closed", err));
    } catch (error){
        throw error;
    }
    return new Promise(function (resolve, reject) {
      inUsePort = new serialPort(portName, { baudRate: 9600 }, (err) => {
        if (err) {
          log.error(err.message);
          reject(err.message);
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
    console.log(dummyMode);
    if (dummyMode) {
      let a = [];
      for (let i = 0; i < 11; ++i) a[i] = i;
      const shuffle = (array) =>{
        let tmp,current,top = array.length;
        if (top)
          while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
          }
        return array;
      }
      return shuffle(a);
    } else {
      console.log("inUsePort");
      return inUsePort.read();
    }
  },
};
