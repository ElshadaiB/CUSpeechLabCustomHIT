// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAOTATKJYRdi-UOGWa7XMRcepEl2ngdiG4',
    authDomain: 'cuspeechlab-external-hit.firebaseapp.com',
    databaseURL: 'https://cuspeechlab-external-hit.firebaseio.com',
    projectId: 'cuspeechlab-external-hit',
    storageBucket: 'cuspeechlab-external-hit.appspot.com',
    messagingSenderId: '517984962337'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
