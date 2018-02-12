module.exports = {
  testMatch: ['<rootDir>/tests/**/*.test.js?(x)'],
  setupTestFrameworkScriptFile: '<rootDir>/tests/setup-jest.js',
  transform: {
    '^.*\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(s?css|less|jpe?g)$': '<rootDir>/tests/mock-jest.js'
  },
  snapshotSerializers: ['enzyme-to-json/serializer']
}
