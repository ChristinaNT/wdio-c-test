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

