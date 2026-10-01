const eslint = require("@eslint/js");
const globals = require("globals");

module.exports = [
  {
    files: ["js/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser
      }
    },
    rules: {
      ...eslint.configs.recommended.rules,
      "no-param-reassign": "off",
      "no-console": "off"
    }
  },

  {
    files: ["eslint.config.js", "webpack.config.js"],
    languageOptions: {
      globals: {
        ...globals.node
      }
    },
    rules: {
      ...eslint.configs.recommended.rules
    }
  },

  {
    ignores: ["node_modules/**", "main.js"]
  }
];
