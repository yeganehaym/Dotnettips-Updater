
$(document).ready(function () {


    chrome.storage.local.get([Variables.posts, Variables.postsComments, Variables.shares, Variables.sharesComments,DateContainer.interval], function ( items) {
        $("#chkarticles").attr("checked", items[Variables.posts]);
        $("#chkarticlescomments").attr("checked", items[Variables.postsComments]);
        $("#chkshares").attr("checked", items[Variables.shares]);
        $("#chksharescomments").attr("checked", items[Variables.sharesComments]);
		$("#interval").val(items[DateContainer.interval]);
    });

    $("#btnsave").click(function() {
		
         var Vposts = $("#chkarticles").is(':checked');
         var VpostsComments = $("#chkarticlescomments").is(':checked');
         var  Vshares = $("#chkshares").is(':checked');
         var VsharesComments = $("#chksharescomments").is(':checked');
		 var Vinterval = $("#interval").val() ;
		 	var params={};
	params[Variables.posts]=Vposts;
	params[Variables.postsComments]=VpostsComments;
	params[Variables.shares]=Vshares;
	params[Variables.sharesComments]=VsharesComments;
	params[DateContainer.interval]=Vinterval;
	
        chrome.storage.local.set(params, function() {
            $("#messageboard").text( Messages.SettingsSaved);
        });
    });
});

  