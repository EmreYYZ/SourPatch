// function onClickHandler(info, tab) {
//   console.log(info.pageUrl);
// }

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    "id": "sampleContextMenu",
    "title": "Basligi Yoket",
    "contexts": ["link"]
  });
});