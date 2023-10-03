export default {
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  transform: {
    '^.+\\.vue$': '@vue/vue3-jest',
    '^.+\\js$': 'babel-jest',
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    '/node_modules/(?!pinia/.*)',
    '<rootDir>/node_modules/(?!@pinia/testing)',
    '<rootDir>/node_modules/(?!vue-demi/.*)',
    '<rootDir>/node_modules/(?!@vue/test-utils)',
  ],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js|ts)$',
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  coverageReporters: ['clover', 'json', 'lcov', ['text', { skipFull: true }]],
  testEnvironmentOptions: {
    customExportConditions: ['node', 'node-addons'],
  },
};
