
const os = require('os');
// we use require('os'); not require('./os');
// finding userinfo
console.log("\n");
console.log(`user uptime is ${(os.uptime())} seconds\n`);
const obj_OS={
    osType:os.type(),
    freeMemory: os.freemem(),
    userInfo:os.userInfo(),
    totalMemory:os.totalMemory,
    release:os.release()
}
const str = JSON.stringify(obj_OS, null, 2);
console.log(str);
console.log(obj_OS);

