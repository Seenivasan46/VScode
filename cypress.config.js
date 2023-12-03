const { defineConfig } = require("cypress");

// baseUrl: "https://www.amazon.in",
module.exports = defineConfig({

  e2e: {
    baseUrl: "https://www.amazon.in",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
