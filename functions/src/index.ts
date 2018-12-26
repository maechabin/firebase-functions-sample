import * as functions from 'firebase-functions';
import * as Cors from 'cors';
const cors = Cors();

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

import * as admin from 'firebase-admin';
admin.initializeApp();

export const helloWorld: functions.HttpsFunction = functions.https.onRequest(
  (request: functions.Request, response: functions.Response): void => {
    const name = (request.query && request.query.name) || 'world';
    cors(request, response, () => {
      response.status(200).send({ text: `Hello ${name} from Firebase!` });
    });
  },
);
