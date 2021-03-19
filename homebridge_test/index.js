const SengledClient = require('./client');

const client = new SengledClient(console.log, true);

(async function main() {
    await client.login('djmarco.palmisano@gmail.com', 'Sengled_2020!');
    const devices = await client.getDevices();
    await client.deviceSetOnOff(devices[1].id, true);
})();
