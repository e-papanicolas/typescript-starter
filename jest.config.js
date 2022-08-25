module.exports = {
  transform: {
    // "^.+\\.ts?$": "ts-jest",
    "^.+\\.(ts|tsx)$": "ts-jest", // use either first or second
  },
  testEnvironment: "node",
  // testRegex: "./src/.*\\.(test|spec)?\\.(ts|ts)$",
  testMatch: [
    "**/__tests__/**/*.+(ts|tsx|js)",
    "**/?(*.)+(spec|test).+(ts|tsx|js)",
  ],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  roots: ["<rootDir>/src"],
};
