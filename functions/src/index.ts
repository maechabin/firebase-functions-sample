import * as functions from 'firebase-functions';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

import * as admin from 'firebase-admin';
admin.initializeApp();

export const helloWorld: functions.HttpsFunction = functions.https.onRequest(
  (request: functions.Request, response: functions.Response): void => {
    const name = (request.query && request.query.name) || 'world';
    response.send(`Hello ${name} from Firebase!`);
  },
);
