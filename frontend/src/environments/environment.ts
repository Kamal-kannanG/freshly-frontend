// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // heroku :true
  BACKEND_URL:'https://freshly-backend-bq63.onrender.com',
  // BACKEND_URL:'http://localhost:3000',
  RECIPE_API_ID:'5ad7b9cb',
  RECIPE_API_KEY:'6223859950386341a5f44c99e9732414',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
