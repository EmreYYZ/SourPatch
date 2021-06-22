// function onClickHandler(info, tab) {
//   console.log(info.pageUrl);
// }

chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "sampleContextMenu",
    title: "Basligi Yoket",
    contexts: ["link"],
  });
});

// Add these to the manifest.json later
// "background": {
//   "service_worker": "background.js"
// },

// "permissions": [
//   "contextMenus"
// ],

//   "action": {
//   "default_popup": "popup.html"
// },

// "options_ui": {
//   "page": "options.html",
//   "open_in_tab": false
// }
