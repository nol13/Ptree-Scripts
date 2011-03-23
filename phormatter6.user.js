// ==UserScript==
// @name           ptree-scripts link formatter
// @namespace      www.nernal.com/link
// @description    pt link formatter
// @include        http://phantasytour.com/*
// @exclude
// @version        0.6     
// ==/UserScript==


//run script if page has comment box
if (document.getElementById('post_body') || document.getElementById('topic_posts_attributes_0_body')){

var clink = '<a href="http://lolyem.com"> Add Link </a>';
var bold = '<a href="http://lolbold.com"> Bold Selected Text </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
var italic = '<a href="http://lolitalic.com"> Italicize Selected Text</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://lolfallapart.com"> Bold & Italicize Selected Text</a>';


document.getElementById('footer').innerHTML = '<div style="width:604px; margin-left: 170px; font-size:120%; padding-left:40px; margin-right: auto; background-color:#ffffff"><br /><br />' + bold + italic + "<br /><br /><br />" + 'Link URL <br /><input id="ptlinkurl" type="text" style="width:499px"/><br />' + 'Link Text<br /><input id="ptlinktext" type="text" style="width:499px"/>' + '<br /><br />Bold <input id="ptlinkbold" type="checkbox" />' + '     Italic <input id="ptlinkitalic" type="checkbox" />' + "<br /><br /><FONT SIZE=3>" + clink + "</FONT> </div>" + document.getElementById('footer').innerHTML;



document.addEventListener('click', function(event) {

//if clicked link is lol run script
if (event.which == 1){
var z = "http://lolyem.com/";
var bl = "http://lolbold.com/";
var il = "http://lolitalic.com/";
var bi = "http://lolfallapart.com/";
var w = event.target.toString();
if (document.getElementById('post_body')) {var el = document.getElementById('post_body');};
if (document.getElementById('topic_posts_attributes_0_body')) {var el = document.getElementById('topic_posts_attributes_0_body');};

if (z == w){
event.stopPropagation();
event.preventDefault();
tte = '[a href="' + document.getElementById('ptlinkurl').value + '"]' + " " + document.getElementById('ptlinktext').value + " [/a]";
if (document.getElementById('ptlinkitalic').checked) { tte = "[i]" + tte + "[/i]";};
if (document.getElementById('ptlinkbold').checked) { tte = "[b]" + tte + "[/b]";};
el.value += tte;
document.getElementById('ptlinkurl').value = "";
document.getElementById('ptlinktext').value = "";
}
else if(w == bl){
event.stopPropagation();
event.preventDefault();
if (el.setSelectionRange) {
 		el.value = el.value.substring(0,el.selectionStart) + "[b]" + el.value.substring(el.selectionStart,el.selectionEnd) + "[/b]" + el.value.substring(el.selectionEnd,el.value.length);
  	};
}

else if(w == il){
event.stopPropagation();
event.preventDefault();
if (el.setSelectionRange) {
 		el.value = el.value.substring(0,el.selectionStart) + "[i]" + el.value.substring(el.selectionStart,el.selectionEnd) + "[/i]" + el.value.substring(el.selectionEnd,el.value.length);
  	};
}

else if(w == bi){
event.stopPropagation();
event.preventDefault();
if (el.setSelectionRange) {
 		el.value = el.value.substring(0,el.selectionStart) + "[b][i]" + el.value.substring(el.selectionStart,el.selectionEnd) + "[/i][/b]" + el.value.substring(el.selectionEnd,el.value.length);
  	};
};


};
}, true);

};





