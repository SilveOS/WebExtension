chrome.browserAction.onClicked.addListener(function (activeTab) {
    var newURL = "https://www.silveos.com/";
    chrome.tabs.create({ url: newURL });
});