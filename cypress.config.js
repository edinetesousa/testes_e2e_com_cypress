const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // eslint-disable-next-line quotes
    baseUrl: "https://notes-serverless-app.com"
    // setupNodeEvents(on, config) {
    // implement node event listeners here
    // },
  },
})