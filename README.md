# Amazon SQS Example

---

This is example how Amazon SQS producer and consumer work

## How To Run

Install dependencies

```
npm install
```

Create `.env` file

```
cp env.example .env
```

Run services

```
nodemon index.js
```

Try sent message

```
http POST 127.0.0.1:3001/sent msg="This is SQS Message"
```
