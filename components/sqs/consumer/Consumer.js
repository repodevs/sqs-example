const { Consumer:SQSConsumer } = require('sqs-consumer');
const AWS = require('aws-sdk');

AWS.config.update({
  region: process.env.AWS_SQS_REGION,
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
});


class Consumer {

  boot(hub, done) {
    this.hub = hub;
    this.setup(done);
  }
  
  async setup(done) {
    
    const app = SQSConsumer.create({
      queueUrl: process.env.AWS_SQS_URL,
      handleMessage: async (message) => {
        // message
        console.log(message);
        
      },
      sqs: new AWS.SQS()
    });

    app.on('error', (err) => {
      console.log(err);
    });
  
    app.start();

    done();
  }

  apiCall() {
    console.log(`Consumer API called!`);
  }
}


module.exports = Consumer;
