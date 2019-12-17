$(document).ready(function(){$("#receiver").on('load',function(){
var iframeWin = document.getElementById("receiver").contentWindow;
iframeWin.postMessage("glob:" + window.location.href,"*");});});

$(window).on('message',function(evt){
	if(evt.originalEvent.data=='go'){
	if(window.location.href!=window.location.href.split('?')[0]){
	history.pushState(null, null, window.location.href);
	history.replaceState(null, null, window.location.href.split('?')[0]);}}
	if(evt.originalEvent.data.length>6){
	 	if(evt.originalEvent.data.substr(0,5)=='glob:'){
		if(window.location.href != window.location.href.split('?')[0]+evt.originalEvent.data.substr(5)){
		history.pushState(null, null, window.location.href);
		history.replaceState(null, null, window.location.href.split('?')[0]+evt.originalEvent.data.substr(5));
		}}}});
		
$(window).on('popstate', function(){
	  var iframeWin = document.getElementById("receiver").contentWindow;
	  if(!!window.location.href.split('?')[1]){
	  iframeWin.postMessage("glob:" + window.location.href.split('?')[1], "*");}
	  else{iframeWin.postMessage("glob:zero", "*");}});