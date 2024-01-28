## React-Native Boilerplate

      Languages:
      Java:
         version: 15.0.2
         path: /Users/choiphil/.jenv/shims/javac
      Ruby:
         version: 2.6.10
         path: /usr/bin/ruby
      npmPackages:
      "@react-native-community/cli": Not Found
      react:
         installed: 18.2.0
         wanted: 18.2.0
      react-native:
         installed: 0.73.2
         wanted: 0.73.2
      react-native-macos: Not Found
      npmGlobalPackages:
      "*react-native*": Not Found
      Android:
      hermesEnabled: true
      newArchEnabled: false
      iOS:
      hermesEnabled: true
      newArchEnabled: false

## eslint, prettier, husky

      1. yarn add --dev husky lint-staged eslint eslint-config-airbnb prettier
      2. setup /.eslintrc.js file - https://github.com/daboigbae/react-native-template/blob/main/template/.eslintrc.js
      3. setup /.prettierrc.js file - https://prettier.io/docs/en/configuration.html
      4. setup husky
      - npx husky install
      - npx husky add .husky/pre-commit "npx --no-install lint-staged"
      - add lint-staged to package.json
      - "lint-staged": {
            "*.{js,jsx,ts,tsx}": [
            "eslint --fix",
            "prettier --write"
            ]
         }
      5. yarn add @typescript-eslint/parser -D


      NEED everyone to run: ***
      - npx husky install
      - npx husky add .husky/pre-commit "npx --no-install lint-staged"
