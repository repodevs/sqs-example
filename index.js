require('dotenv').config();
require('module-alias/register');

const to = require('easy-await-to');

const Hub = require('./Hub');
const Config = require('./components/config/Config');
const Logger = require('./components/logger/Logger');
const Home = require('./components/home/Home');
const Api = require('./components/api/Api');
const Consumer = require('./components/sqs/consumer/Consumer');
const XProducer = require('./components/sqs/producer/Producer');

const hub = new Hub();

hub.register([
  ['Config', new Config()],
  ['Logger', new Logger(), ['Config']],
  ['Home', new Home(), ['Logger']],
  ['Api', new Api(), ['Logger']],
  ['Consumer', new Consumer(), ['Logger']],
  ['XProducer', new XProducer(), ['Logger']],
  ['Fin', {
    boot: async function(hub, done) {
      const logger = await hub.api('Logger', 'Instance');
      const homes = await to(hub.api('Home', 'GetHome'));
      //this.hub = hub;
      
      logger.info(homes);
      console.log(`This is Finn`);
      //console.log(process.env);
      done();
    }

  }, ['Logger', 'Home']]
]);
