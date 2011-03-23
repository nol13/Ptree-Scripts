// ==UserScript==
// @name           ptree-scripts back button fix
// @namespace      www.nernal.com
// @description    back button for pt
// @include        http://phantasytour.com/*
// @exclude  
// @version        1.2      
// ==/UserScript==


var dpost = GM_getValue("thepost", "lolskip");   //get value stored in comment box

if (document.getElementById('post_body') && dpost != "lolskip")
{
	document.getElementById('post_body').value = dpost;
};

GM_setValue("thepost", "lolskip"); //set value back to default

document.addEventListener('click', function(event) {
var x = event.target.toString();


if (event.which == 1 && x.substring(0,24) == "http://phantasytour.com/" && x[x.length - 1] != "#" && x.substring((x.length - 5), (x.length)) != "print" && x.substring(39, 46) != "search?"){
	if (document.getElementById('post_body')){
		if (document.getElementById('post_body').value != "" && document.getElementById('post_body').value != null)
		{		
			GM_setValue("thepost", document.getElementById('post_body').value);		
		}
		};	
	window.location = x;
	event.stopPropagation();
	event.preventDefault();
};
}, true);






