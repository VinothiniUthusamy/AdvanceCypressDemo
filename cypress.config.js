const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "bxhgjn",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
