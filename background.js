// background.js
chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.captureVisibleTab(null, {}, function(imgUrl) {
    // Do something with the screenshot, such as create a new tab to display it
    chrome.tabs.create({url: imgUrl});
  });
});
