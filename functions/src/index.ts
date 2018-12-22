import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

import * as admin from 'firebase-admin';
admin.initializeApp();

export const helloWorld: functions.HttpsFunction = functions.https.onRequest(
  (request: functions.Request, response: functions.Response): void => {
    response.send('Hello Firebase Functions!!\n\n');
  },
);
