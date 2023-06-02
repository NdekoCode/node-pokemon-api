import os from "node:os";
console.log(`My platform is ${os.platform}`);
console.log(`The number of my cpu is ${os.cpus().length}`);
console.log(`CPU Information ${os.arch()}`);
console.log(`My hostname ${os.hostname()}`);
console.log(
  `The home directory of the user of this machine is ${os.homedir()}`
);
