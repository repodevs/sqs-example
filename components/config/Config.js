const keys = require('./keys');
const each = require('async/each');

class Config {
  boot(hub, done) {
    this.hub = hub;
    this.setup(done);
  }


  setup(done) {
    each(keys, (key, cb) => {
      const [ keyName, defaultValue ] = key;
      const realValue = process.env[keyName];

      if(!realValue && (defaultValue == null || defaultValue)) {
        process.env[keyName] = defaultValue;

        return cb();
      }

      if (!realValue && !defaultValue) {
        return cb(new Error(`value for config ${keyName} not defined!`));
      }

      cb();
    }, (err) => {
      if (err) {
        console.error(err);
        process.exit(-1);
      }

      done();
    });
  }
}


module.exports = Config;

