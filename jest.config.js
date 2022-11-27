const nextJest = require("next/jest");

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./src/",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  bail: 1,
  coverageReporters: ["lcov", "text"],
  coveragePathIgnorePatterns: ["src/@types"],
  collectCoverageFrom: ["src/**/*.tsx", "src/**/*.ts"],
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^pages/(.*)$": "<rootDir>/src/pages/$1",
    "^styles/(.*)$": "<rootDir>/src/styles/$1",
  },
};

module.exports = createJestConfig(customJestConfig);
