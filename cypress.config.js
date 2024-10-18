const { defineConfig } = require("cypress");

module.exports = defineConfig({
  userAgent:
    "CypressMozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36",
  env: { grepOmitFiltered: "true" },
  viewportWidth: 1366,
  viewportHeight: 768,
  video: false,
  videoUploadOnPasses: false,
  chromeWebSecurity: false,
  retries: 1,
  defaultCommandTimeout: 40000,
  requestTimeout: 40000,
  responseTimeout: 40000,
  blockHosts: [
    "securepubads.g.doubleclick.net",
    "www.facebook.com",
    "connect.facebook.net",
    "bat.bing.com",
    "s.yimg.com",
    "www.googleadservices.com",
    "sb.scorecardresearch.com",
    "urls.api.twitter.com",
    "googleads.g.doubleclick.net",
    "asia.creativecdn.com",
    "tags.crwdcntrl.net",
    "stats.g.doubleclick.net",
    "rtbcdn.andbeyond.media",
    "ads.pubmatic.com",
    "adservice.google.com",
    "surveys-static.survicate.com",
  ],
  e2e: {
    testIsolation: false,
    specPattern: ["**/e2e/api-tests/*.cy.js"],
    supportFile: false,
    env: {
      apiBaseUrl: "https://jsonplaceholder.typicode.com",
    },
  },
});
