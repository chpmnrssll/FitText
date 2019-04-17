module.exports = {
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true,
  },
  "globals": {
    "document": false,
  },
  "rules": {
    "no-param-reassign": 0,
    "no-plusplus": 0,
    "no-bitwise": 0,
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "allowImportExportEverywhere": true,
    "codeFrame": true
  },
};
