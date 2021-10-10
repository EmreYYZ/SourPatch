// function onClickHandler(info, tab) {
//   console.log(info.pageUrl);
// }

function handleClick() {
  browser.runtime.openOptionsPage();
}

browser.browserAction.onClicked.addListener(handleClick);

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
