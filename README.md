## Workflow:
 Log into the site
 Sort the items
 Add two or more items to the shopping cart
 Visit the shopping cart
 Assert that the items that you added are in the cart
 Remove an item and then continue shopping
 Add another item
 Checkout
 Assert you are purchasing the correct items
 Assert the total price
 Finish checkout
## Setup

Clone the repository
```
git clone https://github.com/ChristinaNT/wdio-c-testing.git
```

Use the package manager `npm` to install dependencies:
```
npm install
```

Don't forget to audix fixes if needed:
```
npm audit fix
```

The test will run paralelly on Chrome Browser(make sure you have the latest Chrome Browser and) Nand in Firefox on headless mode
```
npx wdio wdio.conf.js
```

OR

```
npm test
```

To Run alone in Chrome Browse (90 + browser version please) Replace following block  
```
capabilities: [{
    
   // maxInstances can get overwritten per capability. So if you have an in-house Selenium
   // grid with only 5 firefox instances available you can make sure that not more than
   // 5 instances get started at a time.
   maxInstances: 5,
   //
   browserName: 'chrome',
   acceptInsecureCerts: true
   // ,
   // chromeOptions: {
   //    args: ['headless', 'disable-gpu'],
   //  },
   // If outputDir is provided WebdriverIO can capture driver session logs
   // it is possible to configure which logTypes to include/exclude.
   // excludeDriverLogs: ['*'], // pass '*' to exclude all driver session logs
   // excludeDriverLogs: ['bugreport', 'server'],
 },
 {
   browserName: 'firefox',
   maxInstances: 5,
   acceptInsecureCerts: true,
   'moz:firefoxOptions': {
      args: ['-headless'],
    },
 }
 ],
 
```
WITH

```
capabilities: [{
    
   // maxInstances can get overwritten per capability. So if you have an in-house Selenium
   // grid with only 5 firefox instances available you can make sure that not more than
   // 5 instances get started at a time.
   maxInstances: 5,
   //
   browserName: 'chrome',
   maxInstances: 5
 }
 ],
 

```

To Run Firefox Headed Revoe the following attribute from `wdio.cof.js`

```
'moz:firefoxOptions': {
      args: ['-headless'],
    },

```

Jenkins File can be used to run on Jenkins. (Scroll down to see the instructions to run the test using Docker)

See screenhots
![Screen Shot 2021-04-18 at 6 13 12 PM](https://user-images.githubusercontent.com/35588518/115162636-a6cb7680-a072-11eb-9f2f-b7eba2c9da6d.png)
![Screen Shot 2021-04-18 at 6 13 33 PM](https://user-images.githubusercontent.com/35588518/115162637-a8953a00-a072-11eb-8151-dff7ff070193.png)
![Screen Shot 2021-04-18 at 6 20 08 PM](https://user-images.githubusercontent.com/35588518/115162651-be0a6400-a072-11eb-8e82-c75894133567.png)

## Docker (run test on headless Chrome Browser using Docker)

Replace the `wdio.conf.js` with the following snipppet

```
'use strict';

exports.config = {
  // ====================
  // Runner Configuration
  // ====================
  
  runner: 'local',
  // ==================
  // Specify Test Files
  // ==================
  
  specs: [
    './features/**/*.feature'
  ],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  
  maxInstances: 5,
  
  capabilities: [{
    
  
   maxInstances: 5,
   browserName: 'chrome',
   acceptInsecureCerts: true
   ,
   'goog:chromeOptions': {
      args: ['--no-sandbox', '--disable-dev-shm-usage', '--headless']
  }        
   
 }

 ],

  logLevel: 'warn',
  
  bail: 0,
  
  baseUrl: 'http://localhost',
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if browser driver or grid doesn't send response
  connectionRetryTimeout: 120000,
  //
  // Default request retries count
  connectionRetryCount: 3,

  services: ['chromedriver','docker'],
    
  framework: 'cucumber',
  
  reporters: ['spec'],

  //
  // If you are using Cucumber you need to specify the location of your step definitions.
  cucumberOpts: {
    // <string[]> (file/dir) require files before executing features
    require: [
      "./steps/**/given.js",
      "./steps/**/when.js",
      "./steps/**/then.js"
    ],
    // <boolean> show full backtrace for errors
    backtrace: false,
    // <string[]> ("extension:module") require files with the given EXTENSION after requiring MODULE (repeatable)
    requireModule: [],
    // <boolean> invoke formatters without executing steps
    dryRun: false,
    // <boolean> abort the run on first failure
    failFast: false,
    // <string[]> (type[:path]) specify the output format, optionally supply PATH to redirect formatter output (repeatable)
    format: ['pretty'],
    // <boolean> hide step definition snippets for pending steps
    snippets: true,
    // <boolean> hide source uris
    source: true,
    // <string[]> (name) specify the profile to use
    profile: [],
    // <boolean> fail if there are any undefined or pending steps
    strict: false,
    // <string> (expression) only execute the features or scenarios with tags matching the expression
    tagExpression: '',
    // <number> timeout for step definitions
    timeout: 60000,
    // <boolean> Enable this config to treat undefined definitions as warnings.
    ignoreUndefinedDefinitions: false
  },
  
};
```
Follow the following commands

To build the Docker container you can run:

```
docker build -t mytest -f Dockerfile .
```
OR
```
docker build -t dockerimagename:v1 .
```
Then to run the tests, execute:

```
docker run -it mytest
```
OR
```
docker run -it dockerimagename:v1 .
