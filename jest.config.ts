import type { Config } from 'jest'

const config: Config = {
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageProvider: 'v8',
  coverageDirectory: 'coverage',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  preset: '@shelf/jest-mongodb',
  moduleFileExtensions: ['ts', 'js', 'json', 'node'],
  transformIgnorePatterns: ['/node_modules/'],
  coveragePathIgnorePatterns: [
    '<rootDir>/src/presentation/protocols',
    '<rootDir>/src/data/protocols',
    '<rootDir>/src/presentation/controllers/signup/signup-protocols.ts',
    '<rootDir>/src/domain/'
  ]
}

export default config
