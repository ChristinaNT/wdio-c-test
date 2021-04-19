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

Jenkins File can be used to run on Jenkins.

See screenhots
![Screen Shot 2021-04-18 at 6 13 12 PM](https://user-images.githubusercontent.com/35588518/115162636-a6cb7680-a072-11eb-9f2f-b7eba2c9da6d.png)
![Screen Shot 2021-04-18 at 6 13 33 PM](https://user-images.githubusercontent.com/35588518/115162637-a8953a00-a072-11eb-8151-dff7ff070193.png)
![Screen Shot 2021-04-18 at 6 20 08 PM](https://user-images.githubusercontent.com/35588518/115162651-be0a6400-a072-11eb-8e82-c75894133567.png)

