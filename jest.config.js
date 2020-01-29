module.exports = {
  clearMocks: true,
  coverageDirectory: 'coverage',
  coveragePathIgnorePatterns: ['node_modules'],
  globals: {
    HOST: 'localhost'
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
  },
  setupFiles: [],
  testPathIgnorePatterns: ['node_modules'],
  testRegex: 'tests',
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  transformIgnorePatterns: ['node_modules']
};
