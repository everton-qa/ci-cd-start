const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "i4qrxh",
   retries: {
    runMode: 2,
    openMode: 0
  },
  e2e: {
   // baseUrl: 'https://automationpractice.com.br/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
