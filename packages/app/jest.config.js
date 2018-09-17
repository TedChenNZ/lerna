module.exports = {
  "transform": {
    "^.+\\.tsx?$": "ts-jest"
  },
  "testMatch": [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,mjs,ts,tsx}",
    "<rootDir>/src/**/?(*.)(spec|test).{js,jsx,mjs,ts,tsx}"
  ],
  "moduleFileExtensions": [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ]
}
