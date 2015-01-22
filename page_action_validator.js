function UrlValidation(tabId, changeInfo, tab) {
    console.log('before');
   
        console.log('found');
        chrome.pageAction.show(tabId);
        console.log('after');

};
chrome.tabs.onUpdated.addListener(UrlValidation);