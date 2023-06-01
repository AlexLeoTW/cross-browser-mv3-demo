import browser from "webextension-polyfill";

browser.runtime.onMessage.addListener(async (msg, sender) => {
  if (msg.color) {
    console.log("Receive color = " + msg.color);
    document.body.style.backgroundColor = msg.color;

    return "Change color to " + msg.color;
  } else {
    return "Color message is none.";
  }
});
