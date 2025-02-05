const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://pushing-it.vercel.app/",
    watchForFileChanges: false,
    env: {
      username: "pushingit",
      password: "123456!",
    },
    setupNodeEvents(on, config) {
      // implement node event listeners her
    },
  },
});
