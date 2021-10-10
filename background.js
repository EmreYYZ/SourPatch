// function onClickHandler(info, tab) {
//   console.log(info.pageUrl);
// }

// Opens options page in a new tab once you click on the extension icon
function handleClick() {
  chrome.runtime.openOptionsPage();
}

chrome.browserAction.onClicked.addListener(handleClick);

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
