import express from 'express';
import { ParseServer } from 'parse-server';
import path from 'path';
const __dirname = path.resolve();
import http from 'http';
import dotenv from 'dotenv';
dotenv.config();

// parse-dashboard --dev --appId myAppId --masterKey myMasterKey --serverURL "https://parse-examplee-4e3e5b772e84.herokuapp.com/parse" --appName test-parse-server
export const config = {
  databaseURI:
    'mongodb+srv://heroku_tz924nfv:Vdo4avdZRBZMsNvO@favorit-prod.b9xzy.mongodb.net/heroku_tz924nfv?',
  cloud: process.env.CLOUD_CODE_MAIN,
  appId: '0420151562',
  masterKey: 'yv0h5f51e4', //Add your master key here. Keep it secret!
  // serverURL: 'https://favorit-app.herokuapp.com/parse', // Don't forget to change to https if needed
  serverURL: 'http://12.0.0.1:1337/parse', // Don't forget to change to https if needed
  liveQuery: {
    classNames: ['Posts', 'Comments'], // List of classes to support for query subscriptions
  },
  allowClientClassCreation: true,
  allowExpiredAuthDataToken: true,
};

export const app = express();

// Serve static assets from the /public folder
app.use('/public', express.static(path.join(__dirname, '/public')));

// Serve the Parse API on the /parse URL prefix
if (!process.env.TESTING) {
  const mountPath = process.env.PARSE_MOUNT || '/parse';
  const server = new ParseServer(config);
  await server.start();
  app.use(mountPath, server.app);
}

// Parse Server plays nicely with the rest of your web routes
app.get('/', function (req, res) {
  res.status(200).send('I dream of being a website.  Please star the parse-server repo on GitHub!');
});

// There will be a test page available on the /test path of your server url
// Remove this before launching your app
app.get('/test', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/test.html'));
});

if (!process.env.TESTING) {
  const port = 1337;
  const httpServer = http.createServer(app);
  httpServer.listen(port, function () {
    console.log('parse-server-example running on port ' + port + '.');
  });
  // This will enable the Live Query real-time server
  await ParseServer.createLiveQueryServer(httpServer);
}
