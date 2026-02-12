const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "i4qrxh",
  e2e: {
   // baseUrl: 'https://automationpractice.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
