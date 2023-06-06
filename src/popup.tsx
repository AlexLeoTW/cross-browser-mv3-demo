import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import browser from "webextension-polyfill";

const Popup = () => {
  const [count, setCount] = useState(0);
  const [currentURL, setCurrentURL] = useState<string>();
  const [ip, setIp] = useState<string>("unknown");

  useEffect(() => {
    browser.action.setBadgeText({ text: count.toString() });
  }, [count]);

  useEffect(() => {
    browser.tabs.query({ active: true, currentWindow: true }).then((tabs) => {
      setCurrentURL(tabs[0].url);
    });
  }, []);

  const changeBackground = async () => {
    const tabs = await browser.tabs.query({
      active: true,
      currentWindow: true,
    });
    const tab = tabs[0];
    if (tab.id) {
      const msg = await browser.tabs.sendMessage(tab.id, {
        color: "#555555",
      });
      console.log("result message:", msg);
    }
  };

  const updateIp = React.useCallback(async () => {
    const response = await fetch("https://ipecho.net/plain");
    const data = await response.text();
    setIp(data);
  }, []);

  return (
    <>
      <ul style={{ minWidth: "700px" }}>
        <li>Current URL: {currentURL}</li>
        <li>Current Time: {new Date().toLocaleTimeString()}</li>
        <li>Current IP: {ip}</li>
      </ul>
      <button
        onClick={() => setCount(count + 1)}
        style={{ marginRight: "5px" }}
      >
        count up
      </button>
      <button onClick={changeBackground}>change background</button>
      <button onClick={updateIp}>update IP</button>
    </>
  );
};

const root = createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
