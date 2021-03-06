chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
    suggest([
  {content: ".net tips Home Page", description: "صفحه اصلی"},
      {content: ".net tips Posts", description: "آخرین مطالب"},
      {content: ".net tips News", description: "آخرین نظرات مطالب"},
      {content: ".net tips Post Comments", description: "آخرین اشتراک ها"},
      {content: ".net tips News Comments", description: "آخرین نظرات اشتراک ها"}
    ]);
});
chrome.omnibox.onInputEntered.addListener(function (text) {

var location="";
    switch(text)
	{
	case ".net tips Posts":
		location=WebLinks.postUrl;
		break;
	case ".net tips News":
		location=WebLinks.sharesUrl;
		break;
	case ".net tips Post Comments":
		location=WebLinks.posts_commentsUrl;
		break;
	case".net tips News Comments":
		location=WebLinks.shares_CommentsUrl;
		break;
	default:
		location=WebLinks.Home;
}

    chrome.tabs.getSelected(null, function (tab) {
        chrome.tabs.update(tab.id, { url: location });
    });
});
