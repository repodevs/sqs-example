const pino = require('pino');

class Logger {
  boot(hub, done) {
    this.hub = hub;
    this.setup(done);
  }

  setup(done) {
    this.logger = pino({
      level: process.env.LOGGER_LEVEL,
      base: null
    });

    done();
  }

  apiInstance() {
    return this.logger;
  }

  apiSayHello() {
    return `Hello!`;
  }

}

module.exports = Logger;

