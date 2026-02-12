const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "i4qrxh",
   // baseUrl: 'https://automationpractice.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
