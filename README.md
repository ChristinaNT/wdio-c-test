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

OR

npm test
```

To Run alone in Chrome Browser Replace followinf block  
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
