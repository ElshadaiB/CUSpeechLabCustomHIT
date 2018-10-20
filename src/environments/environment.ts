// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyBQssxuvsiq3xTEXJiuVboJ7DAkDzeJzC4',
    authDomain: 'external-hit.firebaseapp.com',
    databaseURL: 'https://external-hit.firebaseio.com',
    projectId: 'external-hit',
    storageBucket: 'external-hit.appspot.com',
    messagingSenderId: '180327202229'
  }
};

/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
