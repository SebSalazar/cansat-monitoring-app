const fs = require("fs");

//---Verify if exist log folder---
if (!fs.existsSync("log"))
    fs.mkdirSync("log");

module.exports = {
  save: (data) => {
    const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "");

    if (!fs.existsSync(`log/${utc}`))
        fs.mkdirSync(`log/${utc}`);

    fs.appendFile(`log/${utc}/log.csv`, data + "\n", (err) => {
      if (err) {}
    });
  },
  error: (data) => {
    const utc = new Date().toJSON().slice(0, 10).replace(/-/g, "");

    if (!fs.existsSync("log/" + utc))
        fs.mkdirSync("log/" + utc);

    fs.appendFile(`log/${utc}/error.csv`, data + "\n", (err) => {
      if (err) {}
    });
  },
};
