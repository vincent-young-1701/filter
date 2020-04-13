module.exports = {
  roots: ["<rootDir>/src/components/"],
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
  },
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test))\\.tsx?$",
  moduleFileExtensions: ["ts", "tsx", "js"],
};
