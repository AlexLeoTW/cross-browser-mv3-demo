function polling() {
  setInterval(() => console.log("polling"), 1000 * 30);
}
polling();

self.addEventListener("fetch", (event) => {
  const fetchEvent = event as FetchEvent;
  console.log(fetchEvent.request.method);
  console.log(fetchEvent.request.url);
});

console.log("background.ts");
