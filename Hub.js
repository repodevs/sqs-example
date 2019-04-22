const IHub = require('ihub');
const uuid = require('uuid/v4');
const pino = require('pino');
const logger = pino({
    base: null
});


class Hub extends IHub {
    constructor() {
      super();

      this.on('registered', component => {
        logger.info(`Component ${component} registered!`);
      });
    }

    uuid() {
      return uuid();
		}
}

module.exports = Hub;
