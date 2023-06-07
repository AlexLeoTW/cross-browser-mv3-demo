import browser from "webextension-polyfill";

function polling() {
  setInterval(() => console.log("polling"), 1000 * 30);
}
// polling();

async function allowIpEcho() {
  return Promise.all([
    browser.storage.local.set({ allowIpEcho: true }),
    browser.declarativeNetRequest.updateSessionRules({
      removeRuleIds: [123],
    }),
  ]);
}

async function blockIpEcho() {
  return Promise.all([
    browser.storage.local.set({ allowIpEcho: false }),
    browser.declarativeNetRequest.updateSessionRules({
      addRules: [
        {
          id: 123,
          action: { type: "block" },
          condition: {
            urlFilter: "ipecho.net",
            initiatorDomains: [
              browser.runtime.getURL("/").split("://")[1].split("/")[0],
            ],
          },
        },
      ],
      removeRuleIds: [123],
    }),
  ]);
}

// initial setup
(async () => {
  const { allowIpEcho: allow } = await browser.storage.local.get("allowIpEcho");
  if (allow) await allowIpEcho();
  else await blockIpEcho();
  console.log("allowIpEcho", allow);

  if (navigator.userAgent.includes("Chrome")) {
    chrome.declarativeNetRequest.onRuleMatchedDebug.addListener(console.log);
  }
})();

browser.runtime.onMessage.addListener(async (message) => {
  console.log(message);

  switch (message.type) {
    case "allowIpEcho":
      await allowIpEcho();
      return "allow";
    case "blockIpEcho":
      await blockIpEcho();
      return "block";
  }

  return "unknown message";
});
