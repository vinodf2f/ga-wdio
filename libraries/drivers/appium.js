let util = require("util");
let exec = util.promisify(require("child_process").exec);

 const startAppium = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      const { stdout, stderr } = await exec("npx ttab appium");
      console.log(stdout || stderr);
      if (stderr) return resolve(stderr);
      return resolve(stdout);
    } catch (error) {
      resolve(error);
    }
  });
};


module.exports = {startAppium};