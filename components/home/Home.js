const to = require('easy-await-to');

class Home {
  boot(hub, done) {
    this.hub = hub;
    this.home = {};
    this.setup(done);
  }

  async setup(done) {
    this.home['door'] = 2;
    this.home['bathroom'] = 1;
    this.home['bedroom'] = 3;
    this.home['kitchen'] = 1;

    done();
  }

  getHome() {
    return this.home;
  }

  apiGetHome() {
    return this.home;
  }
}

module.exports = Home;

