var period_time=10;
google.load("feeds", "1");
google.setOnLoadCallback(alarmManager);

function alarmManager()
{
	chrome.storage.local.get(DateContainer.interval,function ( items) {
	period_time==items[DateContainer.interval];
	chrome.alarms.create('RssInterval', {periodInMinutes: period_time});
	});
	
	
	chrome.alarms.onAlarm.addListener(function (alarm) {
    if (alarm.name == 'RssInterval') {	
	
	var boolposts,boolpostsComments,boolshares,boolsharesComments;
	chrome.storage.local.get([Variables.posts,Variables.postsComments,Variables.shares,Variables.sharesComments],function ( items) {
		boolposts=items[Variables.posts];
		boolpostsComments=items[Variables.postsComments];
		boolshares=items[Variables.shares];
		boolsharesComments=items[Variables.sharesComments];
		
		
		chrome.storage.local.get([DateContainer.posts,DateContainer.postsComments,DateContainer.shares,DateContainer.sharesComments],function ( items) {
		
		var Vposts=new Date(items[DateContainer.posts]);
		var VpostsComments=new Date(items[DateContainer.postsComments]);
		var Vshares=new Date(items[DateContainer.shares]);
		var VsharesComments=new Date(items[DateContainer.sharesComments]);

		if(boolposts){var result=RssReader(Links.postUrl,Vposts,DateContainer.posts,Messages.PostsUpdated);}
		if(boolpostsComments){var result=RssReader(Links.posts_commentsUrl,VpostsComments,DateContainer.postsComments,Messages.CommentsUpdated); }
		if(boolshares){var result=RssReader(Links.sharesUrl,Vshares,DateContainer.shares,Messages.SharesUpdated);}
		if(boolsharesComments){var result=RssReader(Links.shares_CommentsUrl,VsharesComments,DateContainer.sharesComments,Messages.SharesCommentsUpdated);}
		
		});
	});
	

		
    }
});
}

function SaveDateAndShowMessage(DateField,DateValue,Message)
{
	var params={
	}
	params[DateField]=DateValue;
	
	chrome.storage.local.set( params,function(){

		var options={
			  type: "basic",
			   title: Messages.SiteUpdated,
			   message: Message,
			   iconUrl: "icon.png"
		}
		chrome.notifications.create("",options,function(){
			chrome.notifications.onClicked.addListener(function(){
				chrome.tabs.create({'url': WebLinks.Home}, function(tab) {
					
				});
			});
			
		});
	
	});
}




function RssReader(URL,lastupdate,datecontainer,Message) {	
			
            var feed = new google.feeds.Feed(URL);
            feed.setResultFormat(google.feeds.Feed.XML_FORMAT);
                    feed.load(function (result) {
						if(result!=null)
						{
							var strRssUpdate = result.xmlDocument.firstChild.firstChild.childNodes[5].textContent;
							var RssUpdate=new Date(strRssUpdate);

							if(RssUpdate>lastupdate)
							{
								SaveDateAndShowMessage(datecontainer,strRssUpdate,Message)
							}
							
						}
                      });
        }
       
