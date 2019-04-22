const Producer = require('sqs-producer');


class XProducer {

  boot(hub, done) {
    this.hub = hub;
    this.producer = Object;
    this.setup(done);
  }

  async setup(done) {
    const producer = Producer.create({
      queueUrl: process.env.AWS_SQS_URL,
      region: process.env.AWS_SQS_REGION,
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY

    });  
  
    this.producer = producer;

    done();
  }

  apiCreateQueue(text) {
    this.producer.send([{
      id: 'queue-id1',
      body: text
    }], (err) => {
      if (err) console.log(err);
    })
  }

}

module.exports = XProducer;
