chrome.runtime.onInstalled.addListener(function(details) {
	var now=String(new Date());

	var params={};
	params[Variables.posts]=true;
	params[Variables.postsComments]=false;
	params[Variables.shares]=false;
	params[Variables.sharesComments]=false;
	
	params[DateContainer.interval]=10;
	
	params[DateContainer.posts]=now;
	params[DateContainer.postsComments]=now;
	params[DateContainer.shares]=now;
	params[DateContainer.sharesComments]=now;
	
	 chrome.storage.local.set(params, function() {
		  if(chrome.runtime.lastError)
   {
       /* error */
       console.log(chrome.runtime.lastError.message);
       return;
   }
        });
});
