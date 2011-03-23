// ==UserScript==
// @name           ptree-scripts back button fix
// @namespace      www.nernal.com
// @description    back button for pt for chrome on mac
// @include        http://phantasytour.com/*
// @exclude 
// @version        1.1       
// ==/UserScript==

//if (document.getElementById('post_body')){

if (!this.GM_getValue || this.GM_getValue.toString().indexOf("not supported")>-1) {
	this.GM_getValue=function (key,def) {
		return localStorage[key] || def;
	};
	this.GM_setValue=function (key,value) {
		return localStorage[key]=value;
	};
}


var dpost = GM_getValue("thepost", "lolskip");

if (document.getElementById('post_body') && dpost != "lolskip")
{
	document.getElementById('post_body').value = dpost;
};

GM_setValue("thepost", "lolskip");

document.addEventListener('click', function(event) {
var x = event.target.toString();


if (event.which == 1 && x.substring(0,24) == "http://phantasytour.com/" && x[x.length - 1] != "#" && x.substring((x.length - 5), (x.length)) != "print" && x.substring(39, 46) != "search?" && comdown != true && rcomdown != true){
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

var comdown = false;
var rcomdown = false;

document.addEventListener('keydown', function(event) 
{
	if(event.keyCode == 91){comdown = true;};
	if(event.keyCode == 93){rcomdown = true;};

}, true);

document.addEventListener('keyup', function(event)
 {

	if(event.keyCode == 91){comdown=false;};
	if(event.keyCode == 93){rcomdown = false;};

}, true);




