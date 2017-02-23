The accompanying repository for the deepstreamHub webhook authentication tutorial.

To start the HTTP authentication server, you'll just need to run:

```
node server.js
```

You can then install `ngrok` and run `ngrok http 3000` which will forward traffic to your local server.

After this, you can run `node client.js` to connect the client.
