var root = chrome.contextMenus.create({
    title: 'Open .net tips',
    contexts: ['page']
}, function () {
    var Home= chrome.contextMenus.create({
        title: 'Home',
        contexts: ['page'],
        parentId: root,
        onclick: function (evt) {
            chrome.tabs.create({ url: WebLinks.Home })
        }
    });
	var Posts = chrome.contextMenus.create({
        title: 'Posts',
        contexts: ['page'],
        parentId: root,
        onclick: function (evt) {
            chrome.tabs.create({ url: WebLinks.postUrl })
        }
    });
});