const express = require('express');
const bodyParser = require('body-parser');


class Api {
  boot(hub, done) {
    this.hub = hub;
    this.setup(done);
  }

  async setup(done) {
    const logger = await this.hub.api('Logger', 'Instance');
    const app = express()
      //.disable('x-powered-by')
      .use(bodyParser.json())
  
    app.post('/sent', (req, res) => {
      // SEND SQS HERE
      logger.info(`SQS Processed -> ${res}`);
      //this.hub.api('Consumer', 'Call');
      const bodytext = req.body.msg || 'gada body!';
      this.hub.api('XProducer', 'CreateQueue', bodytext);
      console.log(bodytext);
      res.send(`SQS Sent! msg -> ${bodytext}`);
    });

    app.listen(3001, () => {
      logger.info(`Server started at port 3001`);
      done();
    });

  }
}

module.exports = Api;

