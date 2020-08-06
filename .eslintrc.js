module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 9,
    sourceType: 'module',
    ecmaFeatures: { jsx: true }
  },
  ignorePatterns: ['build', 'node_modules'],
  settings: {
    react: { version: 'detect' }
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0
  },
  overrides: [
    {
      "files": ["**/*.tsx"],
      "rules": {
        // typescript takes care of its own types
        "react/prop-types": "off"
      }
    }
  ]
}