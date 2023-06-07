import browser from "webextension-polyfill";

function polling() {
  setInterval(() => console.log("polling"), 1000 * 30);
}
polling();

browser.webRequest.onBeforeRequest.addListener(
  (requestDetails) => console.log(`Loading: ${requestDetails.url}`),
  { urls: ["<all_urls>"] }
);

console.log("background.ts");
