
chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status === 'complete' && tab.url && tab.url.startsWith("https://twitter.com/")) {
		chrome.tabs.executeScript(tab.id, { file: "js/base.js" })
	}
})
